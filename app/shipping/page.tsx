export const metadata = { title: "Shipping & returns — Slowburn" };

export default function ShippingPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <span className="eyebrow">Shipping & returns</span>
      <h1 className="font-serif text-5xl sm:text-6xl mt-3">The fine print, plainly.</h1>

      <div className="mt-12 space-y-12">
        <section>
          <h2 className="font-serif text-3xl">Shipping</h2>
          <ul className="mt-4 space-y-2 text-stone-700 leading-relaxed">
            <li>· Free standard shipping on US orders over $60.</li>
            <li>· Standard shipping (3–5 business days) is $6 flat below $60.</li>
            <li>· Expedited (2 business days) available at checkout for $14.</li>
            <li>· We ship from Brooklyn, NY, Tuesday through Saturday.</li>
            <li>· Most orders ship within 2 business days.</li>
            <li>· International shipping to Canada, UK, EU — calculated at checkout.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-3xl">Returns</h2>
          <p className="mt-4 text-stone-700 leading-relaxed">
            Don't love a candle? Send it back within 30 days for a full refund. We'll even
            cover the return shipping. The candle is yours to keep or toss.
          </p>
          <p className="mt-4 text-stone-700 leading-relaxed">
            If your order arrives damaged, send a photo to hello@slowburn.studio within
            7 days and we'll make it right.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-3xl">Wholesale</h2>
          <p className="mt-4 text-stone-700 leading-relaxed">
            We work with a small list of independent shops, hotels, and studios. Minimum
            opening order is 24 candles. Reach out through the contact form to start a
            conversation.
          </p>
        </section>
      </div>
    </div>
  );
}
