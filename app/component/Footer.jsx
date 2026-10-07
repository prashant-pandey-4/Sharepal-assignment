"use client";

import React, { useState } from "react";
import { Headphones, Mail, ChevronDown, ChevronUp } from "lucide-react";
import {
  footerCategoryColumns,
  footerCompanyColumns,
  footerSeoData,
} from "@/data/footerData";

export default function Footer() {
  const [showMoreSEO, setShowMoreSEO] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Split categories into Row 1 (first 5) and Row 2 (remaining)
  const categoryRow1 = footerCategoryColumns.slice(0, 5);
  const categoryRow2 = footerCategoryColumns.slice(5);

  return (
    <footer className="mt-16 bg-[#030d2a] text-gray-300 pt-10 sm:pt-12 pb-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
        {/* --- Category Links Row 1 --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 border-b border-gray-800/80 pb-8 sm:pb-10">
          {categoryRow1.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white mb-3">{col.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- Category Links Row 2 --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 py-8 sm:py-10 border-b border-gray-800/80">
          {categoryRow2.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white mb-3">{col.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* --- SEO Bangalore Content Section --- */}
        <div className="py-8 sm:py-10 border-b border-gray-800/80 text-xs sm:text-sm text-gray-400 space-y-4">
          <div>
            <h4 className="text-sm font-bold text-white underline mb-2">
              {footerSeoData.mainTitle}
            </h4>
            <p className="leading-relaxed">
              {footerSeoData.mainDescription}
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-gray-200 mb-1">Categories on Rent</h5>
            <h6 className="font-bold text-white underline mb-1">
              {footerSeoData.actionCamerasTitle}
            </h6>
            <p className="leading-relaxed">
              {footerSeoData.actionCamerasDescription}
            </p>

            <button
              onClick={() => setShowMoreSEO((prev) => !prev)}
              className="mt-2.5 flex items-center gap-1 font-semibold text-white hover:underline cursor-pointer"
            >
              <span>{showMoreSEO ? "Read Less" : "Read More"}</span>
              {showMoreSEO ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>

            {showMoreSEO && (
              <div className="mt-3 space-y-2 text-gray-400">
                {footerSeoData.moreItems.map((item, idx) => (
                  <p key={idx}>
                    <strong className="text-gray-200">{item.title} </strong>
                    {item.text}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* --- Brand Logo + Company Columns --- */}
        <div className="pt-8 sm:pt-10 pb-10 sm:pb-12">
          {/* SharePal Brand Logo */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-0.5">
              <span className="text-2xl font-black italic tracking-wider text-white">Share</span>
              <span className="text-2xl font-black italic tracking-wider text-[#9EFF00]">Pal</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {footerCompanyColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold text-white mb-3">{col.title}</h4>
                <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-gray-400">
                  {col.links.map((link) => (
                    <li key={link.label} className="flex items-center gap-1.5">
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                      {link.badge && (
                        <span className="rounded-full bg-[#9EFF00] px-1.5 py-0.5 text-[9px] font-bold text-black leading-tight">
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Need Help Column with icons */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Need Help</h4>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Headphones className="h-4 w-4 text-white shrink-0" />
                  <a href="#" className="text-white font-medium hover:underline">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400 shrink-0" />
                  <a href="mailto:care@sharepal.in" className="hover:text-white transition-colors break-all">
                    care@sharepal.in
                  </a>
                </li>
              </ul>

              {/* Social Icons */}
              <div className="mt-4 flex items-center gap-4 text-white">
                <a href="#" className="hover:text-[#1877f2] transition-colors" aria-label="Facebook">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
                  <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3 text-center sm:text-left">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-white hover:text-[#9EFF00] transition-colors font-semibold cursor-pointer"
          >
            <span>Go up</span>
            <span>^</span>
          </button>

          <div>
            © 2026. SWNAC E-Kiraya Services Pvt Ltd
          </div>

          <div>
            Made with <span className="text-red-500">❤️</span> for India
          </div>
        </div>
      </div>
    </footer>
  );
}
