import Link from "next/link";
import { Mark } from "@/components/Mark";

const columns = [
  {
    title: "Shop",
    links: [
      { href: "/shop/new", label: "New Arrivals" },
      { href: "/shop/best-sellers", label: "Best Sellers" },
      { href: "/shop/men", label: "Men" },
      { href: "/shop/women", label: "Women" },
      { href: "/shop/unisex", label: "Unisex" },
      { href: "/shop/running", label: "Running" },
      { href: "/shop/training", label: "Training" },
      { href: "/shop/lifestyle", label: "Lifestyle" },
      { href: "/shop/outerwear", label: "Outerwear" },
      { href: "/shop/footwear", label: "Footwear" },
      { href: "/shop/accessories", label: "Accessories" },
      { href: "/shop/sale", label: "Sale" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/shipping", label: "Shipping" },
      { href: "/returns", label: "Returns" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "Our Story" },
      { href: "/hudson", label: "Hudson, New York" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-forest text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Mark className="h-9 w-9" />
            <p className="display text-sm tracking-[0.18em] uppercase">Van & Matthew</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-cream/75">
            Sportswear from Hudson, New York.
            <br />
            Built in Hudson. Made to move.
          </p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cream/55">
              {column.title}
            </p>
            <ul className="mt-4 space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-cream/90 hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs tracking-[0.12em] uppercase text-cream/50 md:px-8">
          © {new Date().getFullYear()} Van & Matthew. Hudson, New York.
        </p>
      </div>
    </footer>
  );
}
