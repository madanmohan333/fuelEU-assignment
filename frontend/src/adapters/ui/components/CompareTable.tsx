import { useEffect, useState } from "react";
import { HttpRoutesAdapter } from "../../infrastructure/httpRoutesAdapter";
// import type{ Route } from "../../../core/domain/route";

export function CompareTable() {
  const [data, setData] = useState<
    { routeId: string; baseline: number; comparison: number; diff: number; compliant: boolean }[]
  >([]);
  const adapter = new HttpRoutesAdapter();
  const TARGET = 89.3368;

  useEffect(() => {
    adapter.getComparisonRoutes().then((routes) => {
      const baseline = routes.find((r) => r.isBaseline);
      if (!baseline) return;

      const result = routes
        .filter((r) => !r.isBaseline)
        .map((r) => ({
          routeId: r.routeId,
          baseline: baseline.ghgIntensity,
          comparison: r.ghgIntensity,
          diff: parseFloat(((r.ghgIntensity / baseline.ghgIntensity - 1) * 100).toFixed(2)),
          compliant: r.ghgIntensity <= TARGET,
        }));
      setData(result);
    });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Compare Routes</h2>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Route</th>
            <th>Baseline</th>
            <th>Comparison</th>
            <th>% Diff</th>
            <th>Compliant</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.routeId} className="text-center border-b">
              <td>{d.routeId}</td>
              <td>{d.baseline}</td>
              <td>{d.comparison}</td>
              <td>{d.diff}%</td>
              <td>{d.compliant ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
