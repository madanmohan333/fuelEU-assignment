import { useEffect, useState } from "react";
import { GetPools } from "../../../core/application/getPools";
import { HttpPoolsAdapter } from "../../infrastructure/httpPoolsAdapter";
import type{ Pool } from "../../../core/domain/pool";

export function PoolsTable() {
  const [pools, setPools] = useState<Pool[]>([]);
  const adapter = new HttpPoolsAdapter();
  const getPools = new GetPools(adapter);

  useEffect(() => {
    getPools.execute().then(setPools);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Pools</h1>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {pools.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
