"use client";

import React from "react";

const categories = [
  {
    id: "all",
    label: "All",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-7 w-7 text-blue-600"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" strokeLinecap="round" />
        <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    image: null,
  },
  {
    id: "gta",
    label: "GTA VI",
    image: "/gta-vi.webp",
  },
  {
    id: "ps5",
    label: "PS5  Console",
    image: "/ps5-console-on-rent-sharepal.webp",
  },
  {
    id: "xbox",
    label: "Xbox Console",
    image: "/xbox-console-on-rent-sharepal.webp",
  },
  {
    id: "vr",
    label: "VR",
    image: "/vr-on-rent-sharepal.webp",
  },
  {
    id: "racing",
    label: "Racing Wheel",
    image: "/logitech-g29-racing-wheel-on-rent-sharepal-1.webp",
  },
  {
    id: "big-screen",
    label: "Big Screen Gaming",
    image: "/ps5-with-2-controllers-with-projector-on-rent.webp",
  },
];

export default function Sidebar({ activeCategory = "all", onCategoryChange }) {
  return (
    <aside className="sticky top-20 w-28 shrink-0 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-gray-100 bg-white p-2.5 shadow-sm no-scrollbar">
      <div className="flex flex-col items-center gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange && onCategoryChange(cat.id)}
              className="group flex flex-col items-center cursor-pointer transition-all focus:outline-none"
            >
              {/* Icon / Image Frame */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl p-1.5 transition-all
                  ${isActive
                    ? "border-2 border-blue-500 bg-white shadow-sm"
                    : "border border-gray-200 bg-white group-hover:border-gray-300 group-hover:shadow-xs"
                  }`}
              >
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  cat.icon
                )}
              </div>

              {/* Label */}
              <span
                className={`mt-1 text-center text-xs leading-tight font-medium
                  ${isActive
                    ? "border-b-2 border-blue-600 font-bold text-blue-600 pb-0.5"
                    : "text-black"
                  }`}
              >
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
