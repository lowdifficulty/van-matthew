import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns",
  description: "Returns and exchanges from Van & Matthew.",
};

export default function ReturnsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Returns</p>
      <h1 className="display mt-3 text-5xl">Returns should be simple.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>If something is not right, we want the next step to be clear.</p>
        <p>
          Items should generally be unworn, unwashed, unaltered, and returned
          with original tags and packaging unless the product is defective.
        </p>
        <p>
          Once a return is received and approved, refunds are sent to the
          original payment method. Bank processing time can vary.
        </p>
        <p>
          For defective or incorrect items, contact support with your order
          number and photos so the issue can be reviewed.
        </p>
        <p>Final-sale merchandise is marked clearly before purchase.</p>
      </div>
    </article>
  );
}
