"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart, formatPrice } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);
  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 6;
  const total = subtotal + shipping;

  if (items.length === 0 && !placed) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <h1 className="font-serif text-4xl">Your cart is empty.</h1>
        <p className="mt-4 text-stone-600">Pick a candle or two first.</p>
        <Link href="/shop" className="btn-primary mt-8 inline-flex">
          Browse candles
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
        <span className="eyebrow">Order received</span>
        <h1 className="font-serif text-5xl mt-4">Thank you.</h1>
        <p className="mt-5 text-stone-700 leading-relaxed max-w-md mx-auto">
          Your order is confirmed. We're pouring your candles into a shippable box right now —
          you'll get a tracking link in your inbox within a day.
        </p>
        <Link href="/" className="btn-primary mt-10 inline-flex">
          Back to the studio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
      <span className="eyebrow">Checkout</span>
      <h1 className="font-serif text-5xl mt-3">Almost there.</h1>

      <div className="mt-10 grid lg:grid-cols-[1fr_400px] gap-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPlaced(true);
            clear();
          }}
          className="space-y-8"
        >
          <section>
            <h2 className="font-serif text-2xl mb-4">Contact</h2>
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900"
            />
          </section>
          <section>
            <h2 className="font-serif text-2xl mb-4">Shipping</h2>
            <div className="grid grid-cols-2 gap-3">
              <input required placeholder="First name" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input required placeholder="Last name" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input required placeholder="Address" className="col-span-2 border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input required placeholder="City" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input required placeholder="ZIP" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
            </div>
          </section>
          <section>
            <h2 className="font-serif text-2xl mb-4">Payment</h2>
            <p className="text-xs text-stone-500 mb-3">Demo store · no real payment processed.</p>
            <input required placeholder="Card number" className="w-full border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
            <div className="grid grid-cols-2 gap-3 mt-3">
              <input required placeholder="MM / YY" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <input required placeholder="CVC" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
            </div>
          </section>
          <button type="submit" className="btn-primary w-full">
            Place order · {formatPrice(total)}
          </button>
        </form>

        <aside className="border border-stone-200 p-6 h-fit bg-stone-50">
          <h2 className="font-serif text-2xl">Your order</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {items.map((i) => (
              <li key={`${i.productId}-${i.sizeId}`} className="flex justify-between gap-3">
                <span className="text-stone-700">
                  {i.name} <span className="text-stone-500">× {i.quantity}</span>
                </span>
                <span className="tabular-nums">{formatPrice(i.unitPrice * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 border-t border-stone-300 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-stone-600">Subtotal</dt>
              <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-stone-600">Shipping</dt>
              <dd className="tabular-nums">{shipping === 0 ? "Free" : formatPrice(shipping)}</dd>
            </div>
            <div className="flex justify-between border-t border-stone-300 pt-2 mt-2">
              <dt className="font-medium">Total</dt>
              <dd className="font-serif text-xl tabular-nums">{formatPrice(total)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
