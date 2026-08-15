import Link from "next/link";
import { Mark } from "@/components/Mark";

const columns = [
  {
    title: "House",
    links: [
      { href: "/about", label: "Our story" },
      { href: "/contact", label: "Contact" },
      { href: "/shop", label: "The shop" },
    ],
  },
  {
    title: "Collections",
    links: [
      { href: "/shop/atelier", label: "Atelier" },
      { href: "/shop/studio", label: "Studio" },
      { href: "/shop/trail", label: "Trail" },
    ],
  },
  {
    title: "Notes",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-9 w-9" />
            <p className="display text-sm tracking-[0.18em] uppercase">Van & Matthew</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-paper/75">
            A dual-founder athletic house in Hudson, New York. Pieces for studio,
            trail, and the hours between — designed without spectacle.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-paper/55">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-paper/90 hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs tracking-[0.12em] uppercase text-paper/50 md:px-8">
          © {new Date().getFullYear()} Van & Matthew. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
