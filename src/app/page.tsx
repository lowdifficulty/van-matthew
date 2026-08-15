import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const featured = products.filter((product) => product.featured);
const categories = [
  {
    href: "/shop/atelier",
    title: "Atelier",
    copy: "Knits and courts for the hours that are not a session.",
  },
  {
    href: "/shop/studio",
    title: "Studio",
    copy: "Training pieces with a low profile and a long memory.",
  },
  {
    href: "/shop/trail",
    title: "Trail",
    copy: "Shells and fleece for dawn paths and late returns.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-paper">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1b241e" />
                <stop offset="55%" stopColor="#243028" />
                <stop offset="100%" stopColor="#3a2c20" />
              </linearGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#sky)" />
            <circle cx="1080" cy="160" r="90" fill="#c4b08a" opacity="0.28" />
            <path d="M0 620C220 540 380 700 620 640C860 580 980 500 1440 560V900H0Z" fill="#16130f" opacity="0.45" />
            <path d="M0 700C300 640 520 760 780 700C1040 640 1200 680 1440 640V900H0Z" fill="#16130f" opacity="0.55" />
            <path
              d="M520 430C560 300 640 230 720 230C680 300 670 370 690 470"
              stroke="#f3eee4"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M920 430C880 300 800 230 720 230C760 300 770 370 750 470"
              stroke="#c4b08a"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="reveal text-[0.72rem] uppercase tracking-[0.22em] text-paper/70">
            Dual-founder athletic house
          </p>
          <h1 className="display reveal reveal-delay mt-4 max-w-3xl text-5xl leading-[0.95] md:text-7xl">
            Two minds.
            <br />
            One house.
          </h1>
          <p className="reveal reveal-late mt-6 max-w-xl text-lg leading-8 text-paper/80">
            Van & Matthew designs for people who move with intention — refined
            performance, quiet luxury, and no borrowed spectacle.
          </p>
          <div className="reveal reveal-late mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="min-h-12 bg-paper px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-ink hover:bg-paper-deep"
            >
              Shop the house
            </Link>
            <Link
              href="/about"
              className="min-h-12 border border-paper/40 px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-paper hover:border-paper"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">
              Featured drop
            </p>
            <h2 className="display mt-3 text-4xl md:text-5xl">The Northline season</h2>
          </div>
          <p className="max-w-md text-ink-soft leading-7">
            A shell, a runner, and the pieces that live between them. Cut in Hudson.
            Worn wherever the light is low and the miles are honest.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.href}
              href={category.href}
              className={`group min-h-64 px-8 py-14 ${index > 0 ? "md:border-l md:border-white/10" : ""}`}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-paper/50">
                Collection
              </p>
              <h2 className="display mt-4 text-4xl">{category.title}</h2>
              <p className="mt-4 max-w-xs text-paper/70 leading-7">{category.copy}</p>
              <span className="mt-8 inline-block text-[0.72rem] uppercase tracking-[0.16em] text-paper/90 group-hover:text-paper">
                Enter
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
        <div className="bg-paper-deep p-8 md:p-12">
          <svg viewBox="0 0 400 320" className="w-full" aria-hidden="true">
            <rect width="400" height="320" fill="#e7dfd0" />
            <path d="M40 250C90 180 140 200 200 140C260 80 300 90 360 40" stroke="#9a7040" strokeWidth="2" fill="none" />
            <circle cx="120" cy="200" r="46" fill="#243028" />
            <circle cx="250" cy="150" r="46" fill="#16130f" />
            <circle cx="185" cy="168" r="10" fill="#c4b08a" />
          </svg>
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">
            Editorial
          </p>
          <h2 className="display mt-3 text-4xl leading-tight md:text-5xl">
            Stillness, then motion.
          </h2>
          <p className="mt-5 text-ink-soft leading-8">
            Van designs for the pause — the walk home, the fitting, the garment
            that still looks like clothing after a long day. Matthew designs for
            the work: tempo, weather, a last that does not lie. The house exists
            because neither view is enough alone.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-bronze-deep underline-offset-4 hover:underline"
          >
            Meet the founders
          </Link>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
