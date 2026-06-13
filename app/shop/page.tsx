"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (activeCat) list = list.filter((p) => p.category === activeCat);
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
    }
    return list;
  }, [activeCat, sort]);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-10">
        <span className="eyebrow">All 30 candles</span>
        <h1 className="font-serif text-5xl sm:text-6xl mt-3">Shop the line.</h1>
        <p className="mt-4 text-stone-700 max-w-2xl">
          Every candle in our line, in one place. Filter by scent family or sort by price.
          Click any candle to read the full notes, sizes, and burn time.
        </p>
      </div>

      {/* Filter / sort bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-b border-stone-300 py-4 mb-10">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCat(null)}
            className={`text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 border ${
              activeCat === null
                ? "bg-[#1c1a17] text-[#f7f3ec] border-[#1c1a17]"
                : "border-stone-300 text-stone-700 hover:border-stone-900"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(activeCat === c.id ? null : c.id)}
              className={`text-[11px] tracking-[0.18em] uppercase px-3 py-1.5 border ${
                activeCat === c.id
                  ? "bg-[#1c1a17] text-[#f7f3ec] border-[#1c1a17]"
                  : "border-stone-300 text-stone-700 hover:border-stone-900"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500 tracking-[0.18em] uppercase">Sort</span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-stone-300 bg-transparent px-3 py-1.5 text-sm focus:outline-none focus:border-stone-900"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-stone-500 text-center py-20">No candles match this filter.</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
