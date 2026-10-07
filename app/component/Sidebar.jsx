"use client";

import React from "react";
import { sidebarCategories } from "@/data/sidebarData";

export default function Sidebar() {
  return (
    <aside className="sticky top-20 w-16 sm:w-20 md:w-28 shrink-0 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-xl sm:rounded-2xl border border-gray-100 bg-white p-1.5 sm:p-2 md:p-2.5 shadow-sm no-scrollbar">
      <div className="flex flex-col items-center gap-2 sm:gap-2.5 md:gap-3">
        {sidebarCategories.map((cat, index) => {
          const isFirst = index === 0; // "All" is active by default
          return (
            <div
              key={cat.id}
              className="group flex flex-col items-center cursor-default transition-all w-full select-none"
            >
              {/* Icon / Image Frame with smooth hover */}
              <div
                className={`flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-lg sm:rounded-xl p-1 transition-all duration-200
                  ${
                    isFirst
                      ? "border-2 border-blue-500 bg-white shadow-sm"
                      : "border border-gray-200 bg-white group-hover:border-blue-400 group-hover:shadow-md group-hover:scale-105"
                  }`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="h-full w-full object-contain pointer-events-none"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-blue-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
                    <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
                    <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-1 text-center text-[9px] sm:text-[10px] md:text-xs leading-tight font-medium max-w-full truncate transition-colors
                  ${
                    isFirst
                      ? "border-b-2 border-blue-600 font-bold text-blue-600 pb-0.5"
                      : "text-gray-700 group-hover:text-blue-600"
                  }`}
              >
                {cat.label}
              </span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
