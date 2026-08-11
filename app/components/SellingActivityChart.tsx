"use client";

import { MoreHorizontal } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", value: 80 },
  { time: "02:00", value: 150 },
  { time: "04:00", value: 170 },
  { time: "06:00", value: 220 },
  { time: "08:00", value: 350 },
  { time: "10:00", value: 380 },
  { time: "12:00", value: 420 },
  { time: "14:00", value: 500 },
  { time: "16:00", value: 430 },
  { time: "18:00", value: 380 },
  { time: "20:00", value: 350 },
  { time: "22:00", value: 150 },
];

export default function SellingActivityChart() {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "24px",
      border: "1px solid #F3F4F6",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: "#111827" }}>Daily Selling Activity</h2>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#E4432A" }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#1F2937" }}>$2,420.22</span>
          </div>
          <button style={{ color: "#9CA3AF", padding: 4, borderRadius: 6, background: "none", border: "none", cursor: "pointer" }}>
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div style={{ height: 260, width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="4 4" stroke="#F3F4F6" vertical={false} />
            <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 11 }} dy={8} />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9CA3AF", fontSize: 11 }} ticks={[0, 150, 300, 450, 600]} dx={-5} />
            <Tooltip
              contentStyle={{ background: "#1F2937", border: "none", borderRadius: 8, padding: "8px 12px" }}
              labelStyle={{ color: "#9CA3AF", fontSize: 11 }}
              itemStyle={{ color: "#fff", fontSize: 13, fontWeight: 600 }}
              formatter={(value) => [`$${value}`, ""]}
              cursor={{ stroke: "#E4432A", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E4432A"
              strokeWidth={2}
              dot={{ r: 4, fill: "#E4432A", stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 6, fill: "#E4432A", stroke: "#fff", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
