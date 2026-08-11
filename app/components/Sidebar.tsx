"use client";

import {
  LayoutDashboard,
  Monitor,
  ArrowLeftRight,
  Package,
  Tag,
  Bookmark,
  Ruler,
  DollarSign,
  ShoppingCart,
  Truck,
  Receipt,
  FileBarChart,
  Users,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    items: [
      {
        icon: <LayoutDashboard size={18} />,
        label: "Dashboard",
        active: true,
      },
      { icon: <Monitor size={18} />, label: "Cashier" },
      { icon: <ArrowLeftRight size={18} />, label: "Transaction" },
    ],
  },
  {
    title: "INVENTORY",
    items: [
      { icon: <Package size={18} />, label: "Master Item" },
      { icon: <Tag size={18} />, label: "Category" },
      { icon: <Bookmark size={18} />, label: "Brand" },
      { icon: <Ruler size={18} />, label: "Units" },
    ],
  },
  {
    items: [
      { icon: <DollarSign size={18} />, label: "Master Price" },
      { icon: <ShoppingCart size={18} />, label: "Purchase Order" },
      { icon: <Truck size={18} />, label: "Supplier" },
      { icon: <Receipt size={18} />, label: "Receipt" },
      { icon: <FileBarChart size={18} />, label: "Report" },
      { icon: <Users size={18} />, label: "User Manager" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[288px] bg-white border-r border-gray-200 flex flex-col z-50">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
        <div className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0">
          <div className="w-11 h-11 rounded-full bg-[#2D3748] flex items-center justify-center">
            <svg viewBox="0 0 44 44" className="w-11 h-11">
              <circle cx="22" cy="22" r="21" fill="#2D3748" stroke="#D4A853" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="17" fill="none" stroke="#D4A853" strokeWidth="0.5" />
              <text x="22" y="18" textAnchor="middle" fill="#D4A853" fontSize="6" fontWeight="bold" fontFamily="serif">
                COLEGIO
              </text>
              <text x="22" y="25" textAnchor="middle" fill="#D4A853" fontSize="5" fontFamily="serif">
                DE SANTA
              </text>
              <text x="22" y="31" textAnchor="middle" fill="#D4A853" fontSize="5" fontFamily="serif">
                RITA
              </text>
            </svg>
          </div>
        </div>
        <div className="flex flex-col min-w-0">
          <span className="font-bold text-sm text-gray-800 leading-tight uppercase tracking-wide">
            COLEGIO DE SANTA RITA
          </span>
          <span className="text-xs text-gray-400 mt-0.5">Point of Sales</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {menuSections.map((section, sIdx) => (
          <div key={sIdx} className={sIdx > 0 ? "mt-2" : ""}>
            {section.title && (
              <div className="px-3 pt-4 pb-2">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                  {section.title}
                </span>
              </div>
            )}
            {section.items.map((item, iIdx) => (
              <button
                key={iIdx}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 mb-0.5 ${
                  item.active
                    ? "bg-[#FDE7E4] text-[#E4432A]"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <span className={item.active ? "text-[#E4432A]" : "text-gray-400"}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.active && (
                  <div className="ml-auto w-1.5 h-6 bg-[#E4432A] rounded-full" />
                )}
              </button>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}
