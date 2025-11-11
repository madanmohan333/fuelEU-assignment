import { useEffect, useState } from "react";
import { HttpRoutesAdapter } from "../../infrastructure/httpRoutesAdapter";
import type{ Route } from "../../../core/domain/route";

export function RoutesTable() {
  const [routes, setRoutes] = useState<Route[]>([]);
  const adapter = new HttpRoutesAdapter();

  useEffect(() => {
    adapter.getRoutes().then(setRoutes);
  }, []);

  const setBaseline = async (routeId: string) => {
    await adapter.setBaseline(routeId);
    const updated = await adapter.getRoutes();
    setRoutes(updated);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Routes</h2>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Route ID</th>
            <th>Vessel</th>
            <th>Fuel</th>
            <th>Year</th>
            <th>GHG</th>
            <th>Baseline</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr key={r.routeId} className="text-center border-b">
              <td>{r.routeId}</td>
              <td>{r.vesselType}</td>
              <td>{r.fuelType}</td>
              <td>{r.year}</td>
              <td>{r.ghgIntensity}</td>
              <td>
                {r.isBaseline ? (
                  "✅"
                ) : (
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => setBaseline(r.routeId)}
                  >
                    Set Baseline
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
