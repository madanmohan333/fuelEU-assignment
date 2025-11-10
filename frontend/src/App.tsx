
import RoutesTable from "./adapters/ui/components/RoutesTable";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
        FuelEU Maritime Dashboard
      </header>
      <main className="p-4">
        <RoutesTable />
      </main>
    </div>
  );
}
