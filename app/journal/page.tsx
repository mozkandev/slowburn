import Link from "next/link";

const POSTS = [
  {
    slug: "smelling-things-slow",
    title: "A short essay on smelling things, slow.",
    excerpt:
      "On lighting candles with intention, layering scents through a room, and the small art of paying attention.",
    date: "March 2026",
    read: "4 min read",
    image: "/products/ember-and-oak.jpg",
  },
  {
    slug: "how-we-blend",
    title: "How we blend a new scent (and why most of them never ship).",
    excerpt:
      "Twelve drafts per scent, three rounds of wear-testing, and the notes that almost made it into Smoked Vanilla.",
    date: "February 2026",
    read: "6 min read",
    image: "/products/smoked-vanilla.jpg",
  },
  {
    slug: "burning-candles-right",
    title: "How to burn a candle so it actually lasts.",
    excerpt:
      "First-burn rules, wick trimming, the 4-hour ceiling, and why your candle is tunneling.",
    date: "January 2026",
    read: "3 min read",
    image: "/products/linen-and-freesia.jpg",
  },
  {
    slug: "amber-glass",
    title: "On amber glass, and why we never switched to clear.",
    excerpt:
      "A short defense of the jar. The color, the recyclability, and the shelf it lives on after the wax is gone.",
    date: "December 2025",
    read: "5 min read",
    image: "/products/wild-rose.jpg",
  },
];

export const metadata = { title: "Journal — Slowburn" };

export default function JournalPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
      <span className="eyebrow">The journal</span>
      <h1 className="font-serif text-5xl sm:text-6xl mt-3 max-w-3xl leading-none">
        Notes from the studio, the perfumer's bench, and the people who light them.
      </h1>

      <div className="mt-14 space-y-12">
        {POSTS.map((post, i) => (
          <article
            key={post.slug}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`aspect-[4/3] bg-stone-200 overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="eyebrow">{post.date} · {post.read}</span>
              <h2 className="font-serif text-3xl sm:text-4xl mt-3 leading-tight">
                {post.title}
              </h2>
              <p className="mt-4 text-stone-700 leading-relaxed">{post.excerpt}</p>
              <Link
                href="#"
                className="inline-block mt-5 text-sm tracking-[0.18em] uppercase border-b border-stone-900 pb-1 hover:text-[#8a5424] hover:border-[#8a5424]"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
