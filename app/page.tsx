import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, COLLECTIONS } from "@/lib/products";

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const newDrops = PRODUCTS.filter((p) => p.isNew).slice(0, 4);
  const editorial = PRODUCTS.filter((p) => p.collection === "apothecary").slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-[#efe7d8] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Small batch · Poured in amber glass</span>
            <h1 className="font-serif text-[2.75rem] sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.01em] mt-5 text-stone-900">
              Candles made slow,<br />
              <em className="font-light italic text-[#8a5424]">burned slower.</em>
            </h1>
            <p className="mt-7 text-lg text-stone-700 max-w-lg leading-relaxed">
              Thirty small-batch scents, hand-poured in soy-coconut wax and amber glass.
              Built to last a season, designed to be remembered long after.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary">
                Shop all 30
              </Link>
              <Link href="/collections/signature" className="btn-ghost">
                Signature line
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase text-stone-600">
              <span>Phthalate-free</span>
              <span>·</span>
              <span>Cotton wick</span>
              <span>·</span>
              <span>Vegan</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] bg-stone-200 overflow-hidden">
              <img
                src={PRODUCTS[0].image}
                alt={PRODUCTS[0].imageAlt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1c1a17] text-[#f7f3ec] px-6 py-5 max-w-[220px]">
              <span className="eyebrow text-[#e7d3a3]">Bestseller</span>
              <p className="font-serif text-xl mt-1.5 leading-tight">
                {PRODUCTS[0].name}
              </p>
              <p className="text-xs text-stone-300 mt-1.5">{PRODUCTS[0].tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE-ISH STRIP */}
      <section className="border-y border-stone-200 bg-[#f7f3ec]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["Hand-poured", "In our Brooklyn studio"],
            ["Soy-coconut wax", "Clean, slow, even burn"],
            ["Free shipping", "On orders over $60"],
            ["30-day returns", "No questions, no hassle"],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="font-serif text-base text-stone-900">{t}</p>
              <p className="text-xs text-stone-500 mt-0.5">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED / BESTSELLERS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">The cult favorites</span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3 leading-tight">
              The candles that come back.
            </h2>
          </div>
          <Link href="/shop" className="hidden sm:inline-block text-sm tracking-[0.18em] uppercase border-b border-stone-900 pb-1 hover:text-[#8a5424] hover:border-[#8a5424]">
            View all 30 →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* EDITORIAL SPLIT */}
      <section className="bg-[#1c1a17] text-[#f7f3ec]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow text-[#e7d3a3]">The slow method</span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-4 leading-tight">
              A candle isn't a product.<br />
              It's a small ritual.
            </h2>
            <p className="mt-6 text-stone-300 leading-relaxed max-w-md">
              We pour in batches of 200 or less. Every jar is wicked by hand, cured for
              two weeks, and labeled the morning it ships. It's slow. It has to be.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-sm tracking-[0.18em] uppercase border-b border-stone-400 pb-1 hover:text-white hover:border-white"
            >
              Read our story →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-stone-700 overflow-hidden">
              <img src={PRODUCTS[2].image} alt={PRODUCTS[2].imageAlt} className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] bg-stone-700 overflow-hidden mt-8">
              <img src={PRODUCTS[5].image} alt={PRODUCTS[5].imageAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="mb-10 text-center">
          <span className="eyebrow">Four ways to start</span>
          <h2 className="font-serif text-4xl sm:text-5xl mt-3">The collections</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {COLLECTIONS.map((c, i) => {
            const sample = PRODUCTS.filter((p) => p.collection === c.id)[0];
            return (
              <Link
                key={c.id}
                href={`/collections/${c.id}`}
                className="group relative aspect-[3/4] overflow-hidden bg-stone-200 block"
              >
                {sample && (
                  <img
                    src={sample.image}
                    alt={c.label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-[10px] tracking-[0.22em] uppercase opacity-80">
                    0{i + 1} / Collection
                  </span>
                  <h3 className="font-serif text-2xl mt-1.5">{c.label}</h3>
                  <p className="text-xs mt-1.5 opacity-80 line-clamp-2">{c.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* NEW DROPS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 border-t border-stone-200">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="eyebrow">Just poured</span>
            <h2 className="font-serif text-4xl sm:text-5xl mt-3">The new drops</h2>
          </div>
          <Link href="/shop" className="text-sm tracking-[0.18em] uppercase border-b border-stone-900 pb-1 hover:text-[#8a5424] hover:border-[#8a5424]">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newDrops.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* JOURNAL TEASER */}
      <section className="bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow">From the journal</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-3 leading-tight max-w-md">
                A short essay on smelling things, slow.
              </h2>
              <p className="mt-5 text-stone-700 leading-relaxed max-w-md">
                On lighting candles with intention, layering scents through a room,
                and the small art of paying attention.
              </p>
              <Link
                href="/journal"
                className="inline-block mt-7 text-sm tracking-[0.18em] uppercase border-b border-stone-900 pb-1 hover:text-[#8a5424] hover:border-[#8a5424]"
              >
                Read the journal →
              </Link>
            </div>
            <div className="aspect-[4/3] bg-stone-300 overflow-hidden">
              <img src={editorial[0]?.image} alt="Editorial" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="text-center mb-12">
          <span className="eyebrow">From people who light them</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-3">Slow burn, fast fans.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              q: "I have not bought a candle that wasn't Slowburn in fourteen months. The Tobacco & Honey is the only one my partner will let me light.",
              n: "Mara K.",
              l: "Brooklyn, NY",
            },
            {
              q: "Genuinely the most thought-out candles I've ever owned. The burn is even, the throw is real, and the glass is something I'm keeping on the shelf after.",
              n: "Devon R.",
              l: "Portland, OR",
            },
            {
              q: "We gave a set of three as a wedding gift and got two phone calls asking where they were from. That kind of compliment is rare.",
              n: "Priya S.",
              l: "Austin, TX",
            },
          ].map((t) => (
            <figure key={t.n} className="border-t border-stone-300 pt-6">
              <blockquote className="font-serif text-lg leading-relaxed text-stone-800">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-stone-900">{t.n}</span>
                <span className="text-stone-500"> · {t.l}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
