import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "House terms for the Van & Matthew brand site.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">Terms</p>
      <h1 className="display mt-3 text-5xl">The short version.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>
          This site is the public face of Van & Matthew, an original athletic
          and lifestyle house. Names, copy, marks, and illustrations here belong
          to Van & Matthew. Do not reuse them as if they were yours.
        </p>
        <p>
          Product pages are a brand preview. Prices are shown in US dollars.
          Checkout is not live on this preview; a cart is for composing an edit,
          not for taking payment.
        </p>
        <p>
          We try to keep descriptions honest. Colors on a screen will never match
          a fitting in north light. If something is wrong, write the atelier.
        </p>
        <p>
          These terms are original, brief, and specific to this house. Using the
          site means you understand this is a brand experience, not a marketplace
          contract copied from a conglomerate.
        </p>
      </div>
    </article>
  );
}
