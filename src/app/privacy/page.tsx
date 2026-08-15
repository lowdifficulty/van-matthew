import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Van & Matthew treats the information you share with the house.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">Privacy</p>
      <h1 className="display mt-3 text-5xl">What we keep, and why.</h1>
      <div className="mt-8 space-y-5 leading-8 text-ink-soft">
        <p>
          Van & Matthew is a small house. We collect only what we need to answer
          a note, send a house letter you asked for, or remember a cart on this
          device.
        </p>
        <p>
          The cart lives in your browser. Newsletter and contact forms on this
          preview site are not stored on a server. We do not sell lists, and we
          do not follow you across the web with advertising pixels.
        </p>
        <p>
          If you write studio@vanandmatthew.com, we keep the correspondence so
          we can reply. Ask us to delete a note and we will.
        </p>
        <p>
          This policy is original to Van & Matthew and covers this brand site
          only. It is not legal advice and it is not copied from another company.
        </p>
      </div>
    </article>
  );
}
