"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  }

  return (
    <section className="border-y border-line bg-paper-deep">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-end md:px-8">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">
            The house note
          </p>
          <h2 className="display mt-3 text-4xl leading-tight md:text-5xl">
            A letter, not a blast.
          </h2>
          <p className="mt-4 max-w-md text-ink-soft leading-7">
            Drops, fittings, and the occasional field note from Van & Matthew.
            We write when there is something worth saying.
          </p>
        </div>
        {sent ? (
          <p className="text-lg" role="status">
            Thank you. We will write when the next drop is ready.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="house-note">
              Email address
            </label>
            <input
              id="house-note"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@atelier.com"
              className="min-h-12 flex-1 border border-line bg-paper px-4 text-ink placeholder:text-mist"
            />
            <button
              type="submit"
              className="min-h-12 bg-ink px-6 text-[0.75rem] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-forest"
            >
              Join
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
