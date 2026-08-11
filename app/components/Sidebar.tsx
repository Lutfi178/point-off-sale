"use client";

import {
  LayoutDashboard, Monitor, FileText, Package, Layers,
  Tag, Box, DollarSign, ShoppingCart, Truck,
  Receipt, BarChart2, Users,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: <LayoutDashboard size={18} />, label: "Dashboard", active: true },
  { icon: <Monitor size={18} />, label: "Cashier" },
  { icon: <FileText size={18} />, label: "Transaction" },
  { icon: <Package size={18} />, label: "Master Item" },
  { icon: <Layers size={18} />, label: "Category" },
  { icon: <Tag size={18} />, label: "Brand" },
  { icon: <Box size={18} />, label: "Units" },
  { icon: <DollarSign size={18} />, label: "Master Price" },
  { icon: <ShoppingCart size={18} />, label: "Purchase Order" },
  { icon: <Truck size={18} />, label: "Supplier" },
  { icon: <Receipt size={18} />, label: "Receipt" },
  { icon: <BarChart2 size={18} />, label: "Report" },
  { icon: <Users size={18} />, label: "User Manager" },
];

export default function Sidebar() {
  return (
    <aside style={{
      position: "fixed",
      left: 0,
      top: 0,
      height: "100%",
      width: "260px",
      backgroundColor: "#ffffff",
      borderRight: "1px solid #E5E7EB",
      display: "flex",
      flexDirection: "column",
      zIndex: 50,
    }}>
      {/* Logo Header */}
      <div style={{
        height: "70px",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0 20px",
        borderBottom: "1px solid #F3F4F6",
        flexShrink: 0,
      }}>
        <div style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0 }}>
          <svg viewBox="0 0 44 44" width="40" height="40">
            <circle cx="22" cy="22" r="21" fill="#2D3748" stroke="#D4A853" strokeWidth="1.5" />
            <circle cx="22" cy="22" r="17" fill="none" stroke="#D4A853" strokeWidth="0.5" />
            <text x="22" y="18" textAnchor="middle" fill="#D4A853" fontSize="6" fontWeight="bold" fontFamily="serif">COLEGIO</text>
            <text x="22" y="25" textAnchor="middle" fill="#D4A853" fontSize="5" fontFamily="serif">DE SANTA</text>
            <text x="22" y="31" textAnchor="middle" fill="#D4A853" fontSize="5" fontFamily="serif">RITA</text>
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#1F2937", textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.3 }}>
            COLEGIO DE SANTA RITA
          </span>
          <span style={{ fontSize: 10, color: "#9CA3AF", marginTop: 2 }}>Point of Sales</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "8px 12px 16px" }}>
        {menuItems.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: 2 }}>
            <button style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 14px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: item.active ? 600 : 400,
              color: item.active ? "#E4432A" : "#374151",
              backgroundColor: item.active ? "#FDE7E4" : "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}>
              <span style={{ color: item.active ? "#E4432A" : "#6B7280", flexShrink: 0, display: "flex" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>

            {/* Garis merah aktif di kanan */}
            {item.active && (
              <div style={{
                position: "absolute",
                right: -12,
                top: "50%",
                transform: "translateY(-50%)",
                width: 4,
                height: 30,
                backgroundColor: "#E4432A",
                borderRadius: "4px 0 0 4px",
              }} />
            )}
          </div>
        ))}

        {/* Section INVENTORY di bawah */}
        <div style={{ marginTop: 32, padding: "0 8px" }}>
          <div style={{ 
            fontSize: 11, 
            fontWeight: 600, 
            color: "#9CA3AF", 
            textTransform: "uppercase", 
            letterSpacing: "0.1em",
            marginBottom: 16,
          }}>
            INVENTORY
          </div>
          
          {/* Inventory items dengan icon */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 6px" }}>
              <Package size={18} color="#6B7280" />
              <span style={{ fontSize: 14, color: "#6B7280" }}>Master Item</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 6px" }}>
              <Layers size={18} color="#6B7280" />
              <span style={{ fontSize: 14, color: "#6B7280" }}>Category</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 6px" }}>
              <Tag size={18} color="#6B7280" />
              <span style={{ fontSize: 14, color: "#6B7280" }}>Brand</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "10px 6px" }}>
              <Box size={18} color="#6B7280" />
              <span style={{ fontSize: 14, color: "#6B7280" }}>Units</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
