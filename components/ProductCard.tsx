import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { formatPrice } from "@/lib/format";

export default function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="product-card group block"
      aria-label={product.name}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-4">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="product-card-img absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-[#1c1a17] text-[#f7f3ec] text-[10px] tracking-[0.18em] uppercase px-2 py-1">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-[#f7f3ec] text-[#1c1a17] text-[10px] tracking-[0.18em] uppercase px-2 py-1">
              Bestseller
            </span>
          )}
        </div>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-serif text-[1.4rem] leading-none text-stone-900 group-hover:text-[#8a5424] transition-colors">
          {product.name}
        </h3>
        <span className="text-sm text-stone-700 tabular-nums">{formatPrice(product.price)}</span>
      </div>
      <p className="mt-1.5 text-sm text-stone-600 line-clamp-2">{product.tagline}</p>
    </Link>
  );
}
