import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">404</p>
      <h1 className="display mt-3 text-5xl">This path is not on the map.</h1>
      <p className="mt-6 text-ink-soft leading-7">
        The house is small. If a page is missing, start from the shop or the story.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="min-h-12 bg-ink px-6 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-paper"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="min-h-12 border border-line px-6 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem]"
        >
          Shop
        </Link>
      </div>
    </div>
  );
}
