"use client";

const receipts = [
  {
    timestamp: "Today - 12:45",
    name: "Rhinotomy machine x250",
    event: "In",
  },
  {
    timestamp: "Today - 12:45",
    name: "Asus X541U",
    event: "Out",
  },
];

export default function StockReceipt() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 min-w-0">
      <h3 className="text-sm font-bold text-gray-900 mb-4">
        Stock Receipt / Issued
      </h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Timestamp
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Item Name
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Event
            </th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 last:border-0"
            >
              <td className="py-3 text-xs text-gray-500">
                {receipt.timestamp}
              </td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">
                    {receipt.name}
                  </span>
                </div>
              </td>
              <td className="py-3">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold ${
                    receipt.event === "In"
                      ? "bg-[#FDE7E4] text-[#E4432A]"
                      : "bg-[#EDE9FE] text-[#7C3AED]"
                  }`}
                >
                  {receipt.event}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
