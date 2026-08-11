"use client";

import { MoreHorizontal } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold text-gray-900">
          Daily Selling Activity
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E4432A]" />
            <span className="text-sm font-semibold text-gray-700">
              $2,420.22
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#F3F4F6"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              ticks={[0, 150, 300, 450, 600]}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                background: "#1F2937",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              labelStyle={{ color: "#9CA3AF", fontSize: 11, marginBottom: 2 }}
              itemStyle={{ color: "#ffffff", fontSize: 13, fontWeight: 600 }}
              formatter={(value: number) => [`$${value}`, ""]}
              cursor={{ stroke: "#E4432A", strokeWidth: 1, strokeDasharray: "4 4" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#E4432A"
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#E4432A",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 6,
                fill: "#E4432A",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
