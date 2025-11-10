import { useEffect, useState } from "react";
import { GetBanks } from "../../../core/application/getBanks";
import { HttpBanksAdapter } from "../../infrastructure/httpBanksAdapter";
import type{ Bank } from "../../../core/domain/bank";

export function BanksTable() {
  const [banks, setBanks] = useState<Bank[]>([]);
  const adapter = new HttpBanksAdapter();
  const getBanks = new GetBanks(adapter);

  useEffect(() => {
    getBanks.execute().then(setBanks);
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Banks</h1>
      <table className="table-auto border w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.name}</td>
              <td>{b.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
