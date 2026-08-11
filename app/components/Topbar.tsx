"use client";

import { ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left: Title */}
        <h1 className="text-lg font-bold text-gray-900 tracking-[0.15em] uppercase">
          DASHBOARD
        </h1>

        {/* Right: Nav + Year + Profile */}
        <div className="flex items-center gap-6">
          {/* Tab Navigation */}
          <nav className="flex items-center gap-5 text-sm">
            <button className="font-semibold text-gray-900 border-b-0 pb-0">
              General
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              Inventory
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              Cashier
            </button>
          </nav>

          {/* Year Dropdown */}
          <button className="flex items-center gap-1.5 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg px-3 py-1.5 hover:border-gray-300 transition-colors">
            <span>2024</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>

          {/* Divider */}
          <div className="w-px h-8 bg-gray-200" />

          {/* User Profile */}
          <div className="flex items-center gap-3">
            {/* Online indicator + name */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#E4432A]" />
                <span className="text-sm font-semibold text-gray-900">
                  Jhony Soda
                </span>
              </div>
              <span className="text-xs text-gray-400">Administrator</span>
            </div>
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-[#E4432A] flex items-center justify-center text-white font-bold text-sm">
              JS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
