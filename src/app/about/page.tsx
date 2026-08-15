import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our story",
  description:
    "Van & Matthew is a dual-founder athletic house. Stillness and motion, held in the same last.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">Our story</p>
      <h1 className="display mt-3 text-5xl leading-tight md:text-6xl">
        Van designs the pause. Matthew designs the work.
      </h1>
      <p className="mt-8 text-lg leading-8 text-ink-soft">
        They met on a dawn path above the Hudson, one carrying a notebook of
        drape, the other a worn pair of trainers and a list of what the last
        mile still got wrong. Van & Matthew began as an argument that never
        resolved — and then became a house because the argument was the point.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        We are not a sports conglomerate. We do not name seasons after campaigns.
        We cut a small number of pieces, name them ourselves, and stand behind
        the materials. Performance is treated as a form of care: a midsole that
        stays honest, a shell that packs without theater, a tee that can leave
        the studio.
      </p>
      <div className="mt-12 grid gap-8 border-y border-line py-10 md:grid-cols-2">
        <div>
          <h2 className="display text-3xl">Van</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Pattern, proportion, and the walk home. Van came from womenswear
            ateliers and still refuses a garment that only works in motion.
          </p>
        </div>
        <div>
          <h2 className="display text-3xl">Matthew</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Lasts, foam, weather. Matthew spent years on footbeds and field
            tests, and still believes a shoe should disappear after the third
            wear.
          </p>
        </div>
      </div>
      <p className="mt-10 leading-8 text-ink-soft">
        The atelier is in Hudson, New York — a former sail loft with north
        light and a single long table. Fittings are by note. Drops are
        announced in the house letter, not a countdown clock.
      </p>
      <p className="mt-10">
        <Link
          href="/shop"
          className="text-[0.75rem] uppercase tracking-[0.16em] text-bronze-deep underline-offset-4 hover:underline"
        >
          Shop the house
        </Link>
      </p>
    </div>
  );
}
