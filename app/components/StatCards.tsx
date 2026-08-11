"use client";

import { ArrowUpRight, ArrowDownRight, Briefcase, Wallet, ClipboardList, TrendingDown } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  iconBg: string;
  badgeIcon: React.ReactNode;
  badgeBg: string;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

function StatCard({ icon, iconBg, badgeIcon, badgeBg, label, value, trend, trendUp }: StatCardProps) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "20px",
      border: "1px solid #F3F4F6",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    }}>
      {/* Top: icon + badge */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {icon}
        </div>
        <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: badgeBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {badgeIcon}
        </div>
      </div>

      {/* Label + Value */}
      <div>
        <p style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500, marginBottom: 4 }}>{label}</p>
        <p style={{ fontSize: 24, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>{value}</p>
      </div>

      {/* Trend */}
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        {trendUp ? (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M4 4L12 12M12 12H6M12 12V6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        <span style={{ fontSize: 12, fontWeight: 600, color: trendUp ? "#22C55E" : "#EF4444" }}>{trend}</span>
      </div>
    </div>
  );
}

export default function StatCards() {
  const cards: StatCardProps[] = [
    {
      icon: <Briefcase size={18} color="#3B82F6" />,
      iconBg: "#DBEAFE",
      badgeIcon: <ArrowUpRight size={14} color="#3B82F6" />,
      badgeBg: "#DBEAFE",
      label: "Today Gross Profit",
      value: "$23,560,000",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <Wallet size={18} color="#F97316" />,
      iconBg: "#FFF3E0",
      badgeIcon: <ArrowUpRight size={14} color="#F97316" />,
      badgeBg: "#FFF3E0",
      label: "Today Net Profit",
      value: "$3,560,000",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <ClipboardList size={18} color="#22C55E" />,
      iconBg: "#DCFCE7",
      badgeIcon: <ArrowUpRight size={14} color="#22C55E" />,
      badgeBg: "#DCFCE7",
      label: "Today Item Receipt",
      value: "$1,500,350",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <TrendingDown size={18} color="#E4432A" />,
      iconBg: "#FDE7E4",
      badgeIcon: <ArrowDownRight size={14} color="#E4432A" />,
      badgeBg: "#FDE7E4",
      label: "Today Estimation Loss",
      value: "$35,000",
      trend: "8.5% Down from yesterday",
      trendUp: false,
    },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {cards.map((card, i) => <StatCard key={i} {...card} />)}
    </div>
  );
}
