"use client";

import { ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E5E7EB",
      height: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingLeft: 28,
      paddingRight: 28,
    }}>
      {/* Title */}
      <h1 style={{ fontSize: 15, fontWeight: 700, color: "#111827", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        DASHBOARD
      </h1>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* Tabs */}
        <nav style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button style={{ fontSize: 13, fontWeight: 700, color: "#111827", borderBottom: "2px solid #111827", paddingBottom: 2, background: "none", border: "none", borderBottom: "2px solid #111827", cursor: "pointer" }}>
            General
          </button>
          <button style={{ fontSize: 13, color: "#9CA3AF", background: "none", border: "none", cursor: "pointer" }}>
            Inventory
          </button>
          <button style={{ fontSize: 13, color: "#9CA3AF", background: "none", border: "none", cursor: "pointer" }}>
            Cashier
          </button>
        </nav>

        {/* Year */}
        <button style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#374151", background: "none", border: "none", cursor: "pointer", fontWeight: 500 }}>
          2024
          <ChevronDown size={14} color="#9CA3AF" />
        </button>

        {/* Divider */}
        <div style={{ width: 1, height: 24, backgroundColor: "#E5E7EB" }} />

        {/* Profile */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#E4432A" }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>Jhony Soda</span>
            </div>
            <span style={{ fontSize: 11, color: "#9CA3AF" }}>Administrator</span>
          </div>
          <div style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "#E4432A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: 12,
          }}>
            JS
          </div>
        </div>
      </div>
    </header>
  );
}
