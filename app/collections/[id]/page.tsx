import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { COLLECTIONS, getProductsByCollection } from "@/lib/products";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ id: c.id }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collection = COLLECTIONS.find((c) => c.id === id);
  if (!collection) notFound();
  const products = getProductsByCollection(collection.id);

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#efe7d8] border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <span className="eyebrow">Collection · 0{COLLECTIONS.findIndex((c) => c.id === id) + 1}</span>
          <h1 className="font-serif text-5xl sm:text-7xl mt-4 leading-none">
            {collection.label}
          </h1>
          <p className="mt-5 text-lg text-stone-700 max-w-2xl">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        {products.length === 0 ? (
          <p className="text-stone-500">This collection is between pours. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="/shop" className="text-sm tracking-[0.18em] uppercase border-b border-stone-900 pb-1 hover:text-[#8a5424] hover:border-[#8a5424]">
            See all 30 candles →
          </Link>
        </div>
      </section>
    </div>
  );
}
