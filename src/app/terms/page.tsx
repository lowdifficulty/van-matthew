import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Van & Matthew website.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Terms</p>
      <h1 className="display mt-3 text-5xl">Terms of use.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>
          These Terms govern your use of the Van & Matthew website and related
          services. By accessing or using the site, you agree to these Terms and
          any policies incorporated by reference.
        </p>
        <p>
          This site is the public face of Van & Matthew, an original sportswear
          company from Hudson, New York. Names, copy, marks, and illustrations
          here belong to Van & Matthew.
        </p>
        <p>
          Product pages are a brand preview. Prices are shown in US dollars.
          Checkout is not live on this preview; a bag is for composing an edit,
          not for taking payment.
        </p>
        <p>
          We try to keep descriptions honest. Colors on a screen will never match
          a fitting in north light. If something is wrong, write us.
        </p>
      </div>
    </article>
  );
}
