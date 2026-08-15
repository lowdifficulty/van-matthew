import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Shipping from Van & Matthew in Hudson, New York.",
};

export default function ShippingPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Shipping</p>
      <h1 className="display mt-3 text-5xl">Shipping.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>We want getting your order to feel as straightforward as wearing it.</p>
        <p>
          Orders are prepared for shipment according to the processing window
          shown at checkout. During launches, holidays, or unusually high-volume
          periods, processing may take longer.
        </p>
        <p>
          Available shipping methods, estimated delivery windows, and costs are
          displayed at checkout based on destination. When your order ships, you
          will receive tracking using the contact details provided.
        </p>
        <p>
          Customers are responsible for entering a complete and accurate shipping
          address. If a shipment appears lost or arrives damaged, contact support
          with your order number.
        </p>
        <p>Free shipping on qualifying U.S. orders. Easy returns.</p>
      </div>
    </article>
  );
}
