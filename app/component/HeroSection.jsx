"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Gaming");

  const tabs = ["Photography", "Gaming", "Outdoor", "Entertainment"];

  return (
    <div className="mx-auto max-w-screen-xl px-2 sm:px-4 md:px-6 pt-1 pb-4">
      {/* Top Main Category Tabs - horizontally scrollable on mobile */}
      <div className="flex items-center justify-start sm:justify-center gap-6 sm:gap-10 md:gap-14 border-b border-gray-200/70 pb-1 mb-2 overflow-x-auto no-scrollbar whitespace-nowrap px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1.5 text-xs sm:text-sm transition-colors cursor-pointer shrink-0 ${
                isActive
                  ? "font-semibold text-gray-900"
                  : "font-medium text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
              {isActive && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#541484] rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Layout: Sidebar + Hero Banner & Content */}
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          {/* Purple Hero Banner with exact SharePal styles */}
          <div
            className="relative flex min-h-[170px] sm:min-h-[220px] md:min-h-[260px] w-full items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl px-2.5 sm:px-4 py-4 sm:py-6 md:py-7 text-center text-white"
            style={{
              background:
                "linear-gradient(360deg, rgb(138, 43, 226) 0%, rgb(76, 24, 124) 100%)",
            }}
          >
            {/* Left Characters / Consoles Image */}
            <div className="absolute left-0 -bottom-5 sm:-bottom-8 md:-bottom-12 lg:-bottom-14 pointer-events-none select-none z-0">
              <img
                src="/gaming-left.webp"
                alt="Xbox & Characters"
                className="w-32 sm:w-48 md:w-60 lg:w-[270px] h-auto object-contain opacity-70 sm:opacity-100"
              />
            </div>

            {/* Center Content - Prominent typography matching original */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-2 sm:px-4 max-w-xl md:max-w-2xl mx-auto">
              <h1 className="font-ubuntu font-bold capitalize leading-tight tracking-tight drop-shadow-md text-2xl sm:text-3xl md:text-[42px] lg:text-[48px] text-white">
                Gaming Consoles
              </h1>

              <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs md:text-sm lg:text-[17px] font-medium text-white/95 leading-snug max-w-xs sm:max-w-md md:max-w-xl">
                Rent the latest gaming gadgets from{" "}
                <span className="font-black italic">SharePal</span> PS5, Xbox,
                <br className="hidden sm:inline" /> Oculus VR, Racing Wheel on rent.
              </p>

              {/* Brand Logos Row matching exact SharePal structure */}
              <div className="flex items-center justify-center mt-2.5 sm:mt-3.5 md:mt-4">
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5">
                  {/* XBOX */}
                  <div className="h-4 sm:h-5 md:h-7 w-auto flex items-center justify-center">
                    <img
                      src="/XBOX.svg"
                      alt="XBOX"
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>

                  {/* Separator pill */}
                  <span className="h-3 sm:h-4 md:h-6 w-0.5 rounded-full bg-white/40" />

                  {/* PS5 */}
                  <div className="h-4 sm:h-5 md:h-7 w-auto flex items-center justify-center">
                    <img
                      src="/PS5.svg"
                      alt="PlayStation 5"
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>

                  {/* Separator pill */}
                  <span className="h-3 sm:h-4 md:h-6 w-0.5 rounded-full bg-white/40" />

                  {/* Meta (Sony.svg) */}
                  <div className="h-4 sm:h-5 md:h-7 w-auto flex items-center justify-center">
                    <img
                      src="/Sony.svg"
                      alt="Meta"
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Characters / PS5 Image */}
            <div className="absolute right-0 -bottom-6 sm:-bottom-10 md:-bottom-14 lg:-bottom-16 pointer-events-none select-none z-0">
              <img
                src="/gaming-right.webp"
                alt="PS5 & Kratos"
                className="w-32 sm:w-48 md:w-60 lg:w-[270px] h-auto object-contain opacity-70 sm:opacity-100"
              />
            </div>
          </div>

          {/* Section Heading below Hero Banner */}
          <div className="mt-4 sm:mt-6 flex items-center justify-between border-b border-gray-200 pb-2 sm:pb-3">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-gray-900">
              Gaming Gadgets On Rent
            </h2>
            <span className="text-[11px] sm:text-xs md:text-sm text-gray-500 font-medium">
              Total items: 50 items
            </span>
          </div>

          {/* Product Cards Grid */}
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
