"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">Contact</p>
        <h1 className="display mt-3 text-5xl leading-tight">Write the house.</h1>
        <p className="mt-6 leading-8 text-ink-soft">
          Fittings, press, and wholesale live in the same inbox. We read slowly
          and answer in kind. The atelier is in Hudson, New York.
        </p>
        <dl className="mt-10 space-y-4 text-sm">
          <div>
            <dt className="uppercase tracking-[0.16em] text-mist">Atelier</dt>
            <dd className="mt-1">18 Vale Street, Hudson, NY 12534</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.16em] text-mist">Studio</dt>
            <dd className="mt-1">
              <a href="mailto:studio@vanandmatthew.com" className="underline-offset-4 hover:underline">
                studio@vanandmatthew.com
              </a>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.16em] text-mist">Hours</dt>
            <dd className="mt-1">Tuesday–Saturday, 11–5, by note</dd>
          </div>
        </dl>
      </div>

      {sent ? (
        <p className="self-center text-xl" role="status">
          Received. Van or Matthew will write back when they can sit with it.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="mt-2 min-h-12 w-full border border-line bg-paper px-4"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 min-h-12 w-full border border-line bg-paper px-4"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Note
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full border border-line bg-paper px-4 py-3"
            />
          </div>
          <button
            type="submit"
            className="min-h-12 bg-ink px-8 text-[0.75rem] uppercase tracking-[0.16em] text-paper hover:bg-forest"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
