import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductById, PRODUCTS, getRelatedProducts } from "@/lib/products";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(id, 4);

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 lg:py-16">
      {/* Breadcrumb */}
      <nav className="text-[11px] tracking-[0.18em] uppercase text-stone-500 mb-8">
        <Link href="/" className="hover:text-stone-900">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-stone-900">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-stone-900">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Image */}
        <div className="space-y-3">
          <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-[#1c1a17] text-[#f7f3ec] text-[10px] tracking-[0.18em] uppercase px-2.5 py-1">
                Just poured
              </span>
            )}
            {product.isBestseller && (
              <span className="absolute top-4 left-4 bg-[#f7f3ec] text-[#1c1a17] text-[10px] tracking-[0.18em] uppercase px-2.5 py-1">
                Bestseller
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div>
          <span className="eyebrow">{product.collection} · {product.category}</span>
          <h1 className="font-serif text-5xl sm:text-6xl mt-3 leading-none">
            {product.name}
          </h1>
          <p className="mt-4 text-lg text-stone-700 italic font-light">
            {product.tagline}
          </p>

          <p className="mt-6 text-stone-700 leading-relaxed">
            {product.description}
          </p>

          {/* Notes */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-y border-stone-200 py-5">
            {(["top", "heart", "base"] as const).map((layer) => (
              <div key={layer}>
                <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500">
                  {layer}
                </span>
                <ul className="mt-2 text-sm text-stone-800 space-y-0.5">
                  {product.notes[layer].map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500">Burn time</span>
              <p className="mt-1">{product.burnTime}</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500">Net weight</span>
              <p className="mt-1">{product.weight}</p>
            </div>
            <div className="col-span-2">
              <span className="text-[10px] tracking-[0.22em] uppercase text-stone-500">Ingredients</span>
              <p className="mt-1 text-stone-700">{product.ingredients}</p>
            </div>
          </div>

          <AddToCart product={product} />

          {/* Care */}
          <div className="mt-10 border-t border-stone-200 pt-6">
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer list-none text-sm font-medium py-2">
                How to burn
                <span className="text-stone-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-stone-700 leading-relaxed mt-2">
                First burn: 2–3 hours, until the wax melts edge to edge. Trim the wick to
                1/4" before every relight. Don't burn longer than 4 hours at a time.
              </p>
            </details>
            <details className="group border-t border-stone-200">
              <summary className="flex justify-between items-center cursor-pointer list-none text-sm font-medium py-2">
                Shipping
                <span className="text-stone-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-stone-700 leading-relaxed mt-2">
                Free shipping on US orders over $60. Most orders ship within 2 business days
                from our Brooklyn studio.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-24 border-t border-stone-200 pt-16">
          <span className="eyebrow">If you like this one</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-3 mb-10">You might also like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
