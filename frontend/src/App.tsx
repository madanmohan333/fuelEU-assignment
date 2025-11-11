import { useState } from "react";
import { RoutesTable } from "./adapters/ui/components/RoutesTable";
import { CompareTable } from "./adapters/ui/components/CompareTable";
import { BankingTable } from "./adapters/ui/components/BankingTable";
import { PoolingTable } from "./adapters/ui/components/PoolingTable";

function App() {
  const [tab, setTab] = useState("routes");

  const renderTab = () => {
    switch (tab) {
      case "compare":
        return <CompareTable />;
      case "banking":
        return <BankingTable />;
      case "pooling":
        return <PoolingTable />;
      default:
        return <RoutesTable />;
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex gap-3 mb-4">
        <button onClick={() => setTab("routes")} className="bg-blue-500 text-white px-3 py-1 rounded">
          Routes
        </button>
        <button onClick={() => setTab("compare")} className="bg-green-500 text-white px-3 py-1 rounded">
          Compare
        </button>
        <button onClick={() => setTab("banking")} className="bg-yellow-500 text-white px-3 py-1 rounded">
          Banking
        </button>
        <button onClick={() => setTab("pooling")} className="bg-purple-500 text-white px-3 py-1 rounded">
          Pooling
        </button>
      </div>
      {renderTab()}
    </div>
  );
}

export default App;
