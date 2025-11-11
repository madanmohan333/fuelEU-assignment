import { useState } from "react";
import { RoutesTable } from "../components/RoutesTable";
import{ BankingTable } from "../components/BankingTable";
import { CompareTable } from "../components/CompareTable";
import { PoolingTable } from "../components/PoolingTable";

export function Dashboard() {
  const [tab, setTab] = useState("routes");

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("routes")}>Routes</button>
        <button onClick={() => setTab("compare")}>Compare</button>
        <button onClick={() => setTab("banks")}>Banking</button>
        <button onClick={() => setTab("pools")}>Pooling</button>
      </div>

      {tab === "routes" && <RoutesTable />}
      {tab === "compare" && <CompareTable />}
      {tab === "banks" && <BankingTable />}
      {tab === "pools" && <PoolingTable />}
    </div>
  );
}
