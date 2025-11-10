import { useEffect, useState } from "react";
import { GetRoutes } from "../../../core/application/getRoutes";
import { SetBaseline } from "../../../core/application/setBaseline";
import { HttpRoutesAdapter } from "../../infrastructure/httpRoutesAdapter";
import type{ Route } from "../../../core/domain/route";

const routesPort = new HttpRoutesAdapter();
const getRoutes = new GetRoutes(routesPort);
const setBaseline = new SetBaseline(routesPort);

export default function RoutesTable() {
  const [routes, setRoutes] = useState<Route[]>([]);

  useEffect(() => {
    getRoutes.execute().then(setRoutes);
  }, []);

  const handleBaseline = async (id: string) => {
    await setBaseline.execute(id);
    alert("Baseline updated!");
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Routes</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>ID</th>
            <th>Vessel</th>
            <th>Fuel</th>
            <th>Year</th>
            <th>GHG</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr key={r.routeId} className="border-b">
              <td>{r.routeId}</td>
              <td>{r.vesselType}</td>
              <td>{r.fuelType}</td>
              <td>{r.year}</td>
              <td>{r.ghgIntensity}</td>
              <td>
                <button
                  onClick={() => handleBaseline(r.routeId)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Set Baseline
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
