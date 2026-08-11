"use client";

const products = [
  {
    id: "PZ.31547",
    name: "Rhinotomy machine x250",
    stock: 14,
  },
  {
    id: "PZ.31721",
    name: "Laptop Asus x249",
    stock: 14,
  },
];

export default function PopularProduct() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 min-w-0">
      <h3 className="text-sm font-bold text-gray-900 mb-4">
        Popular Product
      </h3>
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Product ID
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Item Name
            </th>
            <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-wider pb-3">
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-b border-gray-50 last:border-0"
            >
              <td className="py-3 text-xs font-medium text-gray-700">
                {product.id}
              </td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-gray-200 flex-shrink-0" />
                  <span className="text-xs text-gray-700 font-medium">
                    {product.name}
                  </span>
                </div>
              </td>
              <td className="py-3 text-xs font-semibold text-gray-900">
                {product.stock}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
