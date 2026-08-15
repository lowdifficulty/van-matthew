"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { useCart } from "@/components/CartProvider";
import { Wordmark } from "@/components/Mark";

const nav = [
  { href: "/shop/new", label: "New" },
  { href: "/shop/men", label: "Men" },
  { href: "/shop/women", label: "Women" },
  { href: "/shop/running", label: "Running" },
  { href: "/shop/training", label: "Training" },
  { href: "/shop/lifestyle", label: "Lifestyle" },
  { href: "/shop/outerwear", label: "Outerwear" },
  { href: "/shop/footwear", label: "Footwear" },
  { href: "/shop/sale", label: "Sale" },
];

const mobile = [
  { href: "/shop/new", label: "New Arrivals" },
  { href: "/shop/best-sellers", label: "Best Sellers" },
  { href: "/shop/running", label: "Running" },
  { href: "/shop/training", label: "Training" },
  { href: "/shop/outerwear", label: "Outerwear" },
  { href: "/shop/sale", label: "Sale" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur-md transition-[padding] ${
        compact ? "py-2.5" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="shrink-0" aria-label="Van & Matthew home">
          <Wordmark compact={compact} />
        </Link>

        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-[0.72rem] uppercase tracking-[0.14em] text-ink"
          >
            Bag
            <span className="sr-only"> items</span>
            <span aria-live="polite" className="ml-1 text-copper">
              ({count})
            </span>
          </Link>
          <button
            type="button"
            className="xl:hidden text-[0.72rem] uppercase tracking-[0.14em]"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="xl:hidden border-t border-line bg-cream"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {mobile.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display py-3 text-3xl"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/about"
              className="pt-4 text-[0.78rem] uppercase tracking-[0.16em] text-ink-soft"
              onClick={() => setOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="/contact"
              className="pt-2 text-[0.78rem] uppercase tracking-[0.16em] text-ink-soft"
              onClick={() => setOpen(false)}
            >
              Help
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
