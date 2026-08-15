import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Van & Matthew treats the information you share with us.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Privacy</p>
      <h1 className="display mt-3 text-5xl">Your privacy.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>
          Van & Matthew respects your privacy and wants you to understand how
          information is collected, used, and shared when you visit our site,
          make a purchase, contact us, or interact with our marketing.
        </p>
        <p>
          This preview site keeps the bag in your browser. Newsletter and contact
          forms are not stored on a server. We do not sell lists, and we do not
          follow you across the web with advertising pixels.
        </p>
        <p>
          If you write us, we keep the correspondence so we can reply. Ask us to
          delete a note and we will.
        </p>
        <p>
          A full policy matching payment processors, analytics, and email tools
          will be published before live checkout. Contact: Hudson, New York.
        </p>
      </div>
    </article>
  );
}
