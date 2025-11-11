import { useState } from "react";

interface Ship {
  id: string;
  cbBefore: number;
  cbAfter: number;
}

export function PoolingTable() {
  const [ships, setShips] = useState<Ship[]>([
    { id: "ShipA", cbBefore: 500, cbAfter: 0 },
    { id: "ShipB", cbBefore: -300, cbAfter: 0 },
  ]);

  const createPool = () => {
    const total = ships.reduce((s, x) => s + x.cbBefore, 0);
    const adjusted = ships.map((s) => ({
      ...s,
      cbAfter: total / ships.length,
    }));
    setShips(adjusted);
  };

  const poolSum = ships.reduce((s, x) => s + x.cbAfter, 0);
  const valid = poolSum >= 0;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pooling</h2>
      <table className="min-w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th>Ship</th>
            <th>Before</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          {ships.map((s) => (
            <tr key={s.id} className="text-center border-b">
              <td>{s.id}</td>
              <td>{s.cbBefore}</td>
              <td>{s.cbAfter}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={`mt-3 ${valid ? "text-green-600" : "text-red-500"}`}>
        Pool Sum: {poolSum}
      </p>
      <button
        onClick={createPool}
        className="mt-2 bg-indigo-600 text-white px-3 py-1 rounded"
        disabled={!valid}
      >
        Create Pool
      </button>
    </div>
  );
}
