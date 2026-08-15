import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hudson, New York",
  description: "Discover the Hudson, New York point of view behind Van & Matthew sportswear.",
};

export default function HudsonPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Hudson, New York</p>
      <h1 className="display mt-3 text-5xl leading-tight">Our home court.</h1>
      <p className="mt-8 text-lg leading-8 text-ink-soft">
        Hudson is not a backdrop. It is part of the point of view.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        The city sits between movement and stillness: the Hudson River, the train
        south, the Catskills in the distance, Warren Street in the middle of it all.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        That mix shows up in how we design. We think about early cold, changing
        weather, walking everywhere, leaving town, coming back, and wearing the
        same pieces across more than one part of the day.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        Van & Matthew is sportswear from Hudson—not sportswear pretending Hudson
        is somewhere else.
      </p>
      <p className="display mt-12 text-3xl">River air. City pace. Upstate perspective.</p>
      <p className="mt-10">
        <Link
          href="/about"
          className="text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
        >
          Our Story
        </Link>
      </p>
    </article>
  );
}
