import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[800px] mx-auto px-6 lg:px-10 py-32 text-center">
      <span className="eyebrow">Not found</span>
      <h1 className="font-serif text-6xl sm:text-7xl mt-4">Page gone cold.</h1>
      <p className="mt-5 text-stone-700 max-w-md mx-auto">
        Whatever was here has been replaced with another pour. Have a look around.
      </p>
      <div className="mt-10 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Home</Link>
        <Link href="/shop" className="btn-ghost">Shop all 30</Link>
      </div>
    </div>
  );
}
