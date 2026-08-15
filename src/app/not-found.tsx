import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">404</p>
      <h1 className="display mt-3 text-5xl">Wrong turn.</h1>
      <p className="mt-6 text-ink-soft leading-7">
        The page moved, disappeared, or never made it onto the route.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/"
          className="min-h-12 bg-copper px-6 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-cream"
        >
          Go Home
        </Link>
        <Link
          href="/shop/new"
          className="min-h-12 border border-line px-6 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem]"
        >
          Shop New Arrivals
        </Link>
      </div>
    </div>
  );
}
