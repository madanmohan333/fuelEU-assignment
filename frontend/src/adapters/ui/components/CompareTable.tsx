import { useEffect, useState } from "react";
import { CompareRoutes } from "../../../core/application/compareRoutes";
import { HttpRoutesAdapter } from "../../infrastructure/httpRoutesAdapter";
import type{ Route } from "../../../core/domain/route";

export function CompareTable() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const adapter = new HttpRoutesAdapter();
  const compareRoutes = new CompareRoutes(adapter);

  useEffect(() => {
    compareRoutes.execute().then(setRoutes);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Compare Routes</h1>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Performance</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.name}</td>
              <td>{r.performance ?? "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
