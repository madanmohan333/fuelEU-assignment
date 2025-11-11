import { useState } from "react";

export function BankingTable() {
  const [cb, setCb] = useState(1000);
  const [banked, setBanked] = useState(0);

  const bank = () => {
    if (cb > 0) {
      setBanked(banked + cb);
      setCb(0);
    }
  };

  const apply = () => {
    if (banked > 0) {
      setCb(cb + banked);
      setBanked(0);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Banking</h2>
      <p>CB Before: {cb}</p>
      <p>Banked: {banked}</p>
      <div className="mt-3">
        <button
          className="bg-green-600 text-white px-3 py-1 mr-2 rounded"
          onClick={bank}
          disabled={cb <= 0}
        >
          Bank
        </button>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded"
          onClick={apply}
          disabled={banked <= 0}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
