"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState("Gaming");
  const [activeCategory, setActiveCategory] = useState("all");

  const tabs = ["Photography", "Gaming", "Outdoor", "Entertainment"];

  return (
    <div className="mx-auto max-w-screen-xl px-6 pt-1 pb-4">
      {/* Top Main Category Tabs - close to hero banner */}
      <div className="flex items-center justify-center gap-10 md:gap-14 border-b border-gray-200/70 pb-1 mb-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1.5 text-sm transition-colors cursor-pointer ${
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
      <div className="flex items-start gap-4">
        {/* Left Sidebar */}
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Right Content Area */}
        <div className="flex-1 min-w-0">
          {/* Purple Hero Banner with exact SharePal styles */}
          <div
            className="relative flex h-full min-h-36 w-full items-center justify-between overflow-hidden rounded-xl max-md:shadow-lg md:min-h-56 lg:rounded-xl px-2 pt-2 pb-0 sm:px-4 md:pt-2 md:pb-0"
            style={{
              background:
                "linear-gradient(360deg, rgb(138, 43, 226) 0%, rgb(76, 24, 124) 100%)",
            }}
          >
            {/* Left Characters / Consoles Image (brought down) */}
            <div className="relative flex-shrink-0 flex items-end justify-center w-36 sm:w-48 md:w-56 lg:w-64 self-end">
              <img
                src="/gaming-left.webp"
                alt="Xbox & Characters"
                className="h-44 sm:h-52 md:h-56 lg:h-60 w-auto object-contain select-none translate-y-2 md:translate-y-3"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 px-2 text-center text-white z-10 flex flex-col items-center justify-center py-3 my-auto md:gap-1">
              <h1 className="font-ubuntu font-bold capitalize leading-tight -tracking-tight drop-shadow-lg text-2xl md:text-3xl lg:text-4xl text-white">
                Gaming Consoles
              </h1>

              <p className="mx-auto mt-1 max-w-xs sm:max-w-sm md:max-w-md text-[11px] sm:text-xs md:text-sm font-normal text-white/90 leading-relaxed">
                Rent the latest gaming gadgets from{" "}
                <span className="font-bold italic">SharePal</span> PS5, Xbox,
                Oculus VR, Racing Wheel on rent.
              </p>

              {/* Brand Logos Row matching exact SharePal structure */}
              <div className="flex items-center justify-center mt-3">
                <div className="flex items-center justify-center gap-2 md:gap-4">
                  {/* XBOX */}
                  <div className="h-auto w-14 md:w-20 flex items-center justify-center">
                    <img
                      src="/XBOX.svg"
                      alt="XBOX"
                      className="w-full h-auto object-contain brightness-0 invert"
                    />
                  </div>

                  {/* Separator pill */}
                  <span className="h-4 w-0.5 rounded-full opacity-50 md:h-6 md:opacity-70 bg-white/40" />

                  {/* PS5 */}
                  <div className="h-auto w-14 md:w-20 flex items-center justify-center">
                    <img
                      src="/PS5.svg"
                      alt="PlayStation 5"
                      className="w-full h-auto object-contain brightness-0 invert"
                    />
                  </div>

                  {/* Separator pill */}
                  <span className="h-4 w-0.5 rounded-full opacity-50 md:h-6 md:opacity-70 bg-white/40" />

                  {/* Meta (Sony.svg) */}
                  <div className="h-auto w-14 md:w-20 flex items-center justify-center">
                    <img
                      src="/Sony.svg"
                      alt="Meta"
                      className="w-full h-auto object-contain brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Characters / PS5 Image (brought down) */}
            <div className="relative flex-shrink-0 flex items-end justify-center w-36 sm:w-48 md:w-56 lg:w-64 self-end">
              <img
                src="/gaming-right.webp"
                alt="PS5 & Kratos"
                className="h-44 sm:h-52 md:h-56 lg:h-60 w-auto object-contain select-none translate-y-2 md:translate-y-3"
              />
            </div>
          </div>

          {/* Section Heading below Hero Banner */}
          <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              Gaming Gadgets On Rent
            </h2>
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              Total items: 50 items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
