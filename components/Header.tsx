"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { itemCount, open } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#f7f3ec]/95 backdrop-blur-sm border-b border-stone-200">
      {/* Announcement bar — quietly notes this is a portfolio piece */}
      <div className="bg-[#1c1a17] text-[#f7f3ec] text-[11px] tracking-[0.22em] uppercase text-center py-2.5">
        A self-directed project · Brand, copy &amp; full-stack build · No real checkout
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 -ml-2"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M3 6h16M3 11h16M3 16h16" stroke="#1c1a17" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Left nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] tracking-[0.18em] uppercase">
            <Link href="/shop" className="hover:text-[#8a5424] transition-colors">
              Shop
            </Link>
            <Link href="/collections/signature" className="hover:text-[#8a5424] transition-colors">
              Signature
            </Link>
            <Link href="/collections/seasonal" className="hover:text-[#8a5424] transition-colors">
              Seasonal
            </Link>
            <Link href="/journal" className="hover:text-[#8a5424] transition-colors">
              Journal
            </Link>
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
          >
            <span className="font-serif text-[1.85rem] tracking-[0.04em] text-[#1c1a17]">
              Slowburn
            </span>
          </Link>

          {/* Right nav */}
          <div className="flex items-center gap-5">
            <Link
              href="/about"
              className="hidden lg:inline-block text-[12px] tracking-[0.18em] uppercase hover:text-[#8a5424] transition-colors"
            >
              About
            </Link>
            <button
              onClick={open}
              className="relative p-2 hover:text-[#8a5424] transition-colors"
              aria-label={`Cart, ${itemCount} items`}
            >
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                <path
                  d="M3 7h14l-1.2 11.4a2 2 0 01-2 1.6H6.2a2 2 0 01-2-1.6L3 7zM6.5 7V5a3.5 3.5 0 017 0v2"
                  stroke="#1c1a17"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#1c1a17] text-[#f7f3ec] text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full tabular-nums">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <nav className="flex flex-col gap-3 text-sm tracking-[0.12em] uppercase">
              <Link href="/shop" onClick={() => setMobileOpen(false)}>Shop</Link>
              <Link href="/collections/signature" onClick={() => setMobileOpen(false)}>Signature</Link>
              <Link href="/collections/seasonal" onClick={() => setMobileOpen(false)}>Seasonal</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
              <Link href="/journal" onClick={() => setMobileOpen(false)}>Journal</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
