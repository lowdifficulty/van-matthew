import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Meet Van & Matthew, an independent sportswear company from Hudson, New York.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Our Story</p>
      <h1 className="display mt-3 text-5xl leading-tight md:text-6xl">
        Built in Hudson. Made to move.
      </h1>
      <p className="mt-8 text-lg leading-8 text-ink-soft">
        Van & Matthew was created in Hudson, New York around a simple idea:
        sportswear should perform without taking over your entire identity.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        We wanted clothing that could handle a run, a hard training session, a
        long travel day, or a cold walk through town—and still feel right once
        the workout was over.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        Hudson became the natural reference point. It has edge and calm in the
        same frame. Old industrial buildings sit near open water. New ideas live
        beside things built to last. New York City is close enough to influence
        the pace, but far enough away to leave room to think.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">That tension shapes the brand.</p>
      <p className="mt-6 leading-8 text-ink-soft">
        Van & Matthew is technical without looking overly engineered. Athletic
        without being loud. Premium without becoming delicate. We focus on useful
        fabrics, strong proportions, repeat-wear comfort, and details that earn
        their place.
      </p>
      <p className="mt-6 leading-8 text-ink-soft">
        We are not interested in making more noise. We are interested in making
        better things to move in.
      </p>
      <p className="display mt-12 text-3xl">Upstate roots. Everywhere motion.</p>
      <p className="mt-10">
        <Link
          href="/hudson"
          className="text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
        >
          Hudson, New York
        </Link>
      </p>
    </div>
  );
}
