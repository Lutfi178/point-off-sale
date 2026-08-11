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

function StatCard({
  icon,
  iconBg,
  badgeIcon,
  badgeBg,
  label,
  value,
  trend,
  trendUp,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex-1 min-w-0">
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: iconBg }}
        >
          {icon}
        </div>
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: badgeBg }}
        >
          {badgeIcon}
        </div>
      </div>
      <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <div className="flex items-center gap-1">
        {trendUp ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 4L12 12M12 12H6M12 12V6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        <span
          className={`text-xs font-medium ${
            trendUp ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}

export default function StatCards() {
  const cards: StatCardProps[] = [
    {
      icon: <Briefcase size={20} className="text-[#3B82F6]" />,
      iconBg: "#DBEAFE",
      badgeIcon: <ArrowUpRight size={14} className="text-[#3B82F6]" />,
      badgeBg: "#DBEAFE",
      label: "Today Gross Profit",
      value: "$23,560,000",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <Wallet size={20} className="text-[#F97316]" />,
      iconBg: "#FFF3E0",
      badgeIcon: <ArrowUpRight size={14} className="text-[#3B82F6]" />,
      badgeBg: "#DBEAFE",
      label: "Today Net Profit",
      value: "$3,560,000",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <ClipboardList size={20} className="text-[#22C55E]" />,
      iconBg: "#DCFCE7",
      badgeIcon: <ArrowUpRight size={14} className="text-[#3B82F6]" />,
      badgeBg: "#DBEAFE",
      label: "Today Item Receipt",
      value: "$1,500,350",
      trend: "8.5% Up from yesterday",
      trendUp: true,
    },
    {
      icon: <TrendingDown size={20} className="text-[#E4432A]" />,
      iconBg: "#FDE7E4",
      badgeIcon: <ArrowDownRight size={14} className="text-[#E4432A]" />,
      badgeBg: "#FDE7E4",
      label: "Today Estimation Loss",
      value: "$35,000",
      trend: "8.5% Down from yesterday",
      trendUp: false,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5">
      {cards.map((card, index) => (
        <StatCard key={index} {...card} />
      ))}
    </div>
  );
}
