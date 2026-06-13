export const metadata = { title: "FAQ — Slowburn" };

const FAQS = [
  {
    q: "How long do your candles burn?",
    a: "The 4oz burns for about 25 hours, the 8oz for 50 hours, and the 16oz for 90 hours. The first burn matters most — let it melt edge to edge.",
  },
  {
    q: "What's in your candles?",
    a: "A soy-coconut wax blend, cotton wicks, and phthalate-free fragrance oils we blend in-house. No paraffin, no parabens, no synthetic dyes.",
  },
  {
    q: "Are they vegan and cruelty-free?",
    a: "Yes. We don't use animal-derived materials, and we don't test on animals. None of our suppliers do either.",
  },
  {
    q: "Do you ship internationally?",
    a: "Within the US, yes — free over $60. For Canada, UK, and EU, we ship via a third-party carrier; rates calculated at checkout.",
  },
  {
    q: "Can I return a candle I didn't like?",
    a: "Yes. 30 days, no questions asked. We refund the order, you keep the candle. We'd rather you smell something new.",
  },
  {
    q: "Do you do wholesale?",
    a: "We do, in small batches. Send a note through the contact form with your shop name and a line about what you're looking for.",
  },
  {
    q: "Can I recycle the glass?",
    a: "Yes. Wash with hot soapy water, peel the label, and drop in your glass recycling. Most people keep them on the shelf — they're 100% reusable.",
  },
  {
    q: "Do you make custom scents?",
    a: "For private events and small businesses, yes. Minimum 50 candles. Email us.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <span className="eyebrow">Frequently asked</span>
      <h1 className="font-serif text-5xl sm:text-6xl mt-3">Questions, answered.</h1>

      <div className="mt-12 divide-y divide-stone-200 border-t border-stone-200">
        {FAQS.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="flex justify-between items-center cursor-pointer list-none font-serif text-2xl">
              {f.q}
              <span className="text-stone-400 text-2xl group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-4 text-stone-700 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
