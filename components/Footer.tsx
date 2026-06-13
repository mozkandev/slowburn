"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-[#1c1a17] text-[#f7f3ec] mt-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2 max-w-md">
            <span className="font-serif text-3xl tracking-[0.04em]">Slowburn</span>
            <p className="mt-4 text-stone-300 text-sm leading-relaxed">
              Small-batch candles, poured in amber glass. Built to last a season and to be
              remembered.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setSubmitted(true);
              }}
              className="mt-8"
            >
              <label className="block text-[11px] tracking-[0.22em] uppercase mb-3 text-stone-400">
                The slow dispatch
              </label>
              {submitted ? (
                <p className="text-sm text-stone-200">Thanks. We'll be in touch.</p>
              ) : (
                <div className="flex border-b border-stone-600">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 bg-transparent py-3 text-sm placeholder-stone-500 text-stone-100 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-[11px] tracking-[0.22em] uppercase py-3 px-3 text-stone-200 hover:text-white"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-4">Shop</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/shop" className="text-stone-200 hover:text-white">All candles</Link></li>
              <li><Link href="/collections/signature" className="text-stone-200 hover:text-white">Signature</Link></li>
              <li><Link href="/collections/seasonal" className="text-stone-200 hover:text-white">Seasonal</Link></li>
              <li><Link href="/collections/apothecary" className="text-stone-200 hover:text-white">Apothecary</Link></li>
              <li><Link href="/shop?category=fresh" className="text-stone-200 hover:text-white">By scent</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] tracking-[0.22em] uppercase text-stone-400 mb-4">The studio</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-stone-200 hover:text-white">Our story</Link></li>
              <li><Link href="/journal" className="text-stone-200 hover:text-white">Journal</Link></li>
              <li><Link href="/contact" className="text-stone-200 hover:text-white">Contact</Link></li>
              <li><Link href="/shipping" className="text-stone-200 hover:text-white">Shipping & returns</Link></li>
              <li><Link href="/faq" className="text-stone-200 hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tracking-[0.18em] uppercase text-stone-500">
          <span>© 2026 Slowburn Studio</span>
          <div className="flex gap-6">
            <span>Instagram</span>
            <span>Pinterest</span>
            <span>TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
