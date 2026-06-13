import Link from "next/link";

export const metadata = {
  title: "Our story — Slowburn",
};

export default function AboutPage() {
  return (
    <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <span className="eyebrow">Our story</span>
      <h1 className="font-serif text-5xl sm:text-7xl mt-4 leading-none max-w-3xl">
        A small studio in Brooklyn, pouring candles one batch at a time.
      </h1>
      <div className="mt-12 grid lg:grid-cols-[1fr_1.4fr] gap-12">
        <div className="aspect-[4/5] bg-stone-200 overflow-hidden">
          <img
            src="/products/tobacco-honey.jpg"
            alt="Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="prose prose-stone max-w-none">
          <p className="text-lg leading-relaxed text-stone-800">
            Slowburn started in 2019 in a converted laundromat in Bushwick. We were two
            people, a hot plate, and a stack of amber jars we'd bought too many of. The
            first scent — still in the line, still the bestseller — was Tobacco & Honey.
          </p>
          <p className="mt-5 text-stone-700 leading-relaxed">
            We have not gotten much bigger. There are seven of us now, and we still pour
            every candle by hand. We do not outsource. We do not private-label. We do not
            use paraffin, phthalates, parabens, or synthetic dyes.
          </p>
          <p className="mt-5 text-stone-700 leading-relaxed">
            What we use: a soy-coconut wax blend we spent eight months getting right.
            Cotton wicks. Phthalate-free fragrance oils we blend in-house or with a small
            group of perfumers we've known for years. Amber glass that we keep after the
            candle is gone.
          </p>
          <h2 className="font-serif text-3xl mt-10 mb-4">The numbers</h2>
          <p className="text-stone-700 leading-relaxed">
            200 candles per batch. 14 days of cure time. 1 to 3 percent fragrance load
            depending on the scent. 50 hours of burn on the 8oz. Around 9,000 candles a year
            — small enough that we still know every one of them.
          </p>
          <h2 className="font-serif text-3xl mt-10 mb-4">Where we are</h2>
          <p className="text-stone-700 leading-relaxed">
            The studio is in East Williamsburg, on a quiet block between two warehouses. We
            do tours once a quarter, and we pour at the Brooklyn Flea most Sundays from
            April through October. If you're around, come say hi.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center border-t border-stone-200 pt-16">
        <Link href="/shop" className="btn-primary inline-flex">
          See the candles
        </Link>
      </div>
    </div>
  );
}
