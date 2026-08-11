"use client";

const transactions = [
  {
    id: "T21.0331",
    timestamp: "Today - 12:45",
    amount: "$50,000",
    status: "Succeed",
  },
  {
    id: "T21.0331",
    timestamp: "Today - 12:31",
    amount: "$150,000",
    status: "Succeed",
  },
];

export default function LatestTransaction() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 min-w-0">
      <h3 className="text-sm font-bold text-gray-900 mb-4">
        Latest Transaction
      </h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Transaction ID
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Timestamp
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Amount
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 last:border-0"
            >
              <td className="py-3 text-xs font-medium text-gray-700">
                {tx.id}
              </td>
              <td className="py-3 text-xs text-gray-500">{tx.timestamp}</td>
              <td className="py-3 text-xs font-medium text-gray-700">
                {tx.amount}
              </td>
              <td className="py-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#FDE7E4] text-[#E4432A]">
                  {tx.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
