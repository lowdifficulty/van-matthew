"use client";

import { FormEvent, useState } from "react";

const topics = [
  "Order Status",
  "Return / Exchange",
  "Sizing",
  "Product Question",
  "Press",
  "Wholesale",
  "Partnerships",
  "Other",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Contact</p>
        <h1 className="display mt-3 text-5xl leading-tight">How can we help?</h1>
        <p className="mt-6 leading-8 text-ink-soft">
          Questions about an order, fit, product, return, or something else? Send
          us a note. Include your order number whenever possible so we can get to
          the right answer faster.
        </p>
        <dl className="mt-10 space-y-4 text-sm">
          <div>
            <dt className="uppercase tracking-[0.16em] text-mist">Location</dt>
            <dd className="mt-1">Van & Matthew · Hudson, New York</dd>
          </div>
        </dl>
      </div>

      {sent ? (
        <p className="self-center text-xl" role="status">
          Received. We will write back when we can sit with it.
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
              className="mt-2 min-h-12 w-full border border-line bg-cream px-4"
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
              className="mt-2 min-h-12 w-full border border-line bg-cream px-4"
            />
          </div>
          <div>
            <label htmlFor="order" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Order number (optional)
            </label>
            <input
              id="order"
              name="order"
              className="mt-2 min-h-12 w-full border border-line bg-cream px-4"
            />
          </div>
          <div>
            <label htmlFor="topic" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Topic
            </label>
            <select
              id="topic"
              name="topic"
              required
              className="mt-2 min-h-12 w-full border border-line bg-cream px-4"
              defaultValue=""
            >
              <option value="" disabled>
                Select a topic
              </option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="mt-2 w-full border border-line bg-cream px-4 py-3"
            />
          </div>
          <button
            type="submit"
            className="min-h-12 bg-copper px-8 text-[0.75rem] uppercase tracking-[0.16em] text-cream hover:bg-copper-deep"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
