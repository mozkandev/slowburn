"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-[1100px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Say hello</span>
          <h1 className="font-serif text-5xl sm:text-6xl mt-3 leading-none">
            We're here, slowly.
          </h1>
          <p className="mt-5 text-stone-700 leading-relaxed max-w-md">
            Questions about a scent, a wholesale inquiry, a press request, or just want to
            say you liked the candle? We read every message and we usually answer within
            two days.
          </p>

          <div className="mt-10 space-y-2 text-sm">
            <p>
              <span className="eyebrow text-stone-500">Email</span>
              <br />
              <a href="mailto:hello@slowburn.studio" className="text-stone-900 hover:text-[#8a5424]">
                hello@slowburn.studio
              </a>
            </p>
            <p className="mt-4">
              <span className="eyebrow text-stone-500">Studio</span>
              <br />
              264 Wyckoff Ave, Brooklyn NY 11237
            </p>
            <p className="mt-4">
              <span className="eyebrow text-stone-500">Hours</span>
              <br />
              Tuesday – Saturday, 11am – 6pm
            </p>
          </div>
        </div>

        <div>
          {sent ? (
            <div className="border border-stone-200 p-10 bg-stone-50">
              <h2 className="font-serif text-3xl">Got it.</h2>
              <p className="mt-3 text-stone-700">
                Thanks for writing. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <input required placeholder="First name" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
                <input required placeholder="Last name" className="border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              </div>
              <input required type="email" placeholder="Email" className="w-full border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
              <select className="w-full border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900">
                <option>General question</option>
                <option>Wholesale inquiry</option>
                <option>Press / collaboration</option>
                <option>Order issue</option>
              </select>
              <textarea
                required
                placeholder="Your message"
                rows={6}
                className="w-full border border-stone-300 bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-stone-900 resize-none"
              />
              <button type="submit" className="btn-primary w-full">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
