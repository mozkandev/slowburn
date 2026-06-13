"use client";

import Link from "next/link";
import { useCart, formatPrice } from "@/lib/cart-context";

export default function CartPage() {
  const { items, subtotal, removeItem, updateQuantity, itemCount } = useCart();

  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 6;
  const total = subtotal + shipping;

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-12">
      <span className="eyebrow">Your cart</span>
      <h1 className="font-serif text-5xl sm:text-6xl mt-3">
        {itemCount === 0 ? "Nothing in here yet." : `${itemCount} item${itemCount === 1 ? "" : "s"} in your cart`}
      </h1>

      {items.length === 0 ? (
        <div className="mt-12 text-center py-16 border-t border-stone-200">
          <p className="text-stone-600">Pour one into your cart. We'll wait.</p>
          <Link href="/shop" className="btn-primary mt-8 inline-flex">
            Browse candles
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid lg:grid-cols-[1fr_400px] gap-10">
          {/* Items */}
          <div>
            <div className="border-t border-stone-200">
              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="grid grid-cols-[100px_1fr_auto] sm:grid-cols-[120px_1fr_auto] gap-4 sm:gap-6 py-6 border-b border-stone-200"
                >
                  <Link
                    href={`/products/${item.productId}`}
                    className="aspect-[4/5] bg-stone-100 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/products/${item.productId}`}
                      className="font-serif text-2xl hover:text-[#8a5424]"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-stone-500 mt-1">{item.sizeLabel}</p>
                    <p className="text-sm text-stone-700 mt-1 tabular-nums">
                      {formatPrice(item.unitPrice)} each
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-stone-300">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.sizeId, item.quantity - 1)
                          }
                          className="w-8 h-8 text-stone-600 hover:bg-stone-100"
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.sizeId, item.quantity + 1)
                          }
                          className="w-8 h-8 text-stone-600 hover:bg-stone-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.sizeId)}
                        className="text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-900"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="font-serif text-xl tabular-nums">
                    {formatPrice(item.unitPrice * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <aside className="border border-stone-200 p-6 h-fit bg-stone-50">
            <h2 className="font-serif text-2xl">Order summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-stone-600">Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-stone-600">Shipping</dt>
                <dd className="tabular-nums">
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </dd>
              </div>
              {subtotal < 60 && subtotal > 0 && (
                <p className="text-xs text-stone-500">
                  Add {formatPrice(60 - subtotal)} for free shipping.
                </p>
              )}
              <div className="flex justify-between border-t border-stone-300 pt-3 mt-3">
                <dt className="font-medium">Total</dt>
                <dd className="font-serif text-2xl tabular-nums">{formatPrice(total)}</dd>
              </div>
            </dl>
            <Link href="/checkout" className="btn-primary w-full mt-6">
              Checkout
            </Link>
            <Link
              href="/shop"
              className="block text-center text-[11px] tracking-[0.18em] uppercase text-stone-500 hover:text-stone-900 mt-3"
            >
              Keep browsing
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
