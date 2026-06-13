"use client";

import { useState } from "react";
import { useCart, formatPrice } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const [sizeId, setSizeId] = useState(product.sizes[1]?.id || product.sizes[0].id);
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();

  const size = product.sizes.find((s) => s.id === sizeId) || product.sizes[0];
  const total = size.price * qty;

  return (
    <div className="mt-8">
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-[11px] tracking-[0.22em] uppercase text-stone-500">Size</span>
        <span className="font-serif text-2xl tabular-nums">{formatPrice(size.price)}</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {product.sizes.map((s) => (
          <button
            key={s.id}
            onClick={() => setSizeId(s.id)}
            className={`px-3 py-3 text-sm border ${
              sizeId === s.id
                ? "bg-[#1c1a17] text-[#f7f3ec] border-[#1c1a17]"
                : "border-stone-300 text-stone-700 hover:border-stone-900"
            }`}
          >
            <span className="block font-medium">{s.oz}oz</span>
            <span className="block text-[10px] tracking-[0.15em] uppercase opacity-80 mt-0.5">
              {s.label.split("·")[1]?.trim() || `${s.oz}oz`}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 flex gap-3 items-stretch">
        <div className="flex items-center border border-stone-300">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-10 h-12 text-stone-600 hover:bg-stone-100"
            aria-label="Decrease"
          >
            −
          </button>
          <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="w-10 h-12 text-stone-600 hover:bg-stone-100"
            aria-label="Increase"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addItem(product, size, qty)}
          className="btn-primary flex-1"
        >
          Add to cart · {formatPrice(total)}
        </button>
      </div>

      <p className="mt-4 text-xs text-stone-500">
        In stock · Ships within 2 business days
      </p>
    </div>
  );
}
