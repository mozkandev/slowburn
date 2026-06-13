"use client";

import Link from "next/link";
import { useCart, formatPrice } from "@/lib/cart-context";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={close}
        aria-hidden
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-[440px] bg-[#f7f3ec] flex flex-col fade-in">
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
          <div>
            <span className="eyebrow">Your cart</span>
            <h2 className="font-serif text-2xl mt-0.5">
              {itemCount === 0 ? "Empty" : `${itemCount} item${itemCount === 1 ? "" : "s"}`}
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Close cart"
            className="p-2 -mr-2 hover:text-[#8a5424] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-8">
            <p className="font-serif text-2xl text-stone-700">No candles yet.</p>
            <p className="text-stone-500 mt-2 text-sm">Pour one into your cart. We'll wait.</p>
            <Link
              href="/shop"
              onClick={close}
              className="btn-primary mt-8"
            >
              Browse candles
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.sizeId}`}
                    className="flex gap-4 pb-5 border-b border-stone-200 last:border-0"
                  >
                    <div className="w-20 h-24 bg-stone-100 flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.productId}`}
                        onClick={close}
                        className="font-serif text-lg leading-tight hover:text-[#8a5424]"
                      >
                        {item.name}
                      </Link>
                      <p className="text-xs text-stone-500 mt-0.5">{item.sizeLabel}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-stone-300">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.sizeId, item.quantity - 1)
                            }
                            className="w-7 h-7 text-stone-600 hover:bg-stone-200"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.sizeId, item.quantity + 1)
                            }
                            className="w-7 h-7 text-stone-600 hover:bg-stone-200"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm tabular-nums">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.sizeId)}
                        className="text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-900 mt-2"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 px-6 py-5 bg-stone-50">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-sm text-stone-600">Subtotal</span>
                <span className="font-serif text-xl tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-[11px] text-stone-500 mb-4">
                Shipping and taxes calculated at checkout. Free shipping over $60.
              </p>
              <Link
                href="/checkout"
                onClick={close}
                className="btn-primary w-full"
              >
                Checkout
              </Link>
              <button
                onClick={close}
                className="w-full text-center text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-900 mt-3"
              >
                Continue browsing
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
