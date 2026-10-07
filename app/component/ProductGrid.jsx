"use client";

import React, { useState } from "react";
import productData from "@/data/product-list.json";

export default function ProductGrid({ activeCategory = "all" }) {
  const [wishlist, setWishlist] = useState({});
  const allProducts = productData.products || [];

  // Filter products based on selected category in sidebar
  const filteredProducts = allProducts.filter((product) => {
    if (activeCategory === "all") return true;
    const nameLower = product.name.toLowerCase();
    if (activeCategory === "ps5") return nameLower.includes("ps5");
    if (activeCategory === "xbox") return nameLower.includes("xbox");
    if (activeCategory === "vr")
      return (
        nameLower.includes("vr") ||
        nameLower.includes("oculus") ||
        nameLower.includes("quest")
      );
    if (activeCategory === "racing")
      return (
        nameLower.includes("wheel") ||
        nameLower.includes("racing") ||
        nameLower.includes("g29")
      );
    if (activeCategory === "gta")
      return nameLower.includes("gta") || nameLower.includes("grand theft");
    if (activeCategory === "big-screen")
      return nameLower.includes("projector") || nameLower.includes("combo");
    return true;
  });

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-4">
      {/* 2 to 4-Column Responsive Cards Grid matching SharePal */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
        {filteredProducts.map((product) => {
          const finalPrice =
            product.price ||
            Math.round(product.per_day_rent * 4 * 1.25) + 699;
          const formattedPrice = finalPrice.toLocaleString("en-IN");
          const isWishlisted = !!wishlist[product.id];

          return (
            <div
              key={product.id}
              className="group relative flex flex-col justify-between rounded-xl sm:rounded-2xl bg-transparent p-2 sm:p-2.5 md:p-3 hover:bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Top Image Container - White in default and hover */}
                <div className="relative flex h-38 sm:h-48 md:h-52 w-full flex-col justify-between rounded-xl sm:rounded-2xl md:rounded-[22px] bg-white p-2 sm:p-3 overflow-hidden shadow-xs">
                  {/* Top Bar inside image box: Tag & Wishlist */}
                  <div className="flex items-center justify-between z-10 min-h-6">
                    {product.tag ? (
                      <span className="rounded-full border border-[#f97316] bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#ea580c] shadow-2xs">
                        {product.tag}
                      </span>
                    ) : (
                      <span />
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className={`rounded-full p-1 transition-all duration-300 cursor-pointer ${ isWishlisted ? "opacity-100 scale-100 text-red-500" : "text-gray-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 hover:text-red-500" }`}
                      aria-label="Wishlist"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={isWishlisted ? "#ef4444" : "none"}
                        stroke={isWishlisted ? "#ef4444" : "currentColor"}
                        strokeWidth={1.5}
                        className="h-5 w-5 transition-transform active:scale-125"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Centered Product Image - No zoom animation */}
                  <div className="my-auto flex items-center justify-center h-32 md:h-36 w-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-auto max-w-full object-contain select-none"
                    />
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="mt-3 text-sm font-semibold text-neutral-900 leading-snug line-clamp-2 min-h-10">
                  {product.name}
                </h3>

                {/* Divider line below title */}
                <div className="mt-2 border-b border-gray-200/60" />

                {/* Rent duration */}
                <p className="mt-2 text-xs text-neutral-500">
                  Rent for <strong className="font-bold text-neutral-900">4</strong>{" "}
                  days
                </p>
              </div>

              {/* Bottom Row: Price & GST tag on left, Circular '+' button on right */}
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <span className="text-base md:text-lg font-bold text-neutral-900 leading-none tracking-tight">
                    ₹{formattedPrice}
                  </span>
                  <span className="mt-1 block w-max rounded-xs bg-[#9EFF00] px-1.5 py-0.5 text-[10px] font-semibold text-black leading-none">
                    Incl. of GST
                  </span>
                </div>

                {/* Plus circle button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-neutral-900 text-neutral-900 transition-colors duration-200 hover:bg-neutral-900 hover:text-white cursor-pointer active:scale-95"
                  aria-label="Add to cart"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="my-12 text-center text-gray-500">
          <p className="text-base font-semibold">No products found in this category</p>
          <p className="text-xs text-gray-400 mt-1">
            Please select &quot;All&quot; from the sidebar to view all gadgets.
          </p>
        </div>
      )}
    </div>
  );
}
