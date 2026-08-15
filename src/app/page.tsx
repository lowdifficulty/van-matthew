import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const arrivals = products.filter((product) => product.isNew);
const bestsellers = products.filter((product) => product.bestSeller);
const features = [
  {
    title: "Move lighter",
    copy: "Technical layers designed to keep the day moving.",
  },
  {
    title: "Train daily",
    copy: "Comfort, stretch, and support without overcomplication.",
  },
  {
    title: "Live in it",
    copy: "Athletic essentials made for well beyond the workout.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <svg className="h-full w-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a2b22" />
                <stop offset="55%" stopColor="#243d30" />
                <stop offset="100%" stopColor="#3d2418" />
              </linearGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#sky)" />
            <circle cx="1080" cy="160" r="90" fill="#b85c38" opacity="0.42" />
            <path d="M0 620C220 540 380 700 620 640C860 580 980 500 1440 560V900H0Z" fill="#1a1612" opacity="0.45" />
            <path d="M0 700C300 640 520 760 780 700C1040 640 1200 680 1440 640V900H0Z" fill="#1a1612" opacity="0.55" />
            <path
              d="M520 430C560 300 640 230 720 230C680 300 670 370 690 470"
              stroke="#fbf7f0"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M920 430C880 300 800 230 720 230C760 300 770 370 750 470"
              stroke="#b85c38"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="relative mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="reveal text-[0.72rem] uppercase tracking-[0.22em] text-cream/70">
            Sportswear from Hudson, New York
          </p>
          <h1 className="display reveal reveal-delay mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
            Built in Hudson.
            <br />
            Made to move.
          </h1>
          <p className="reveal reveal-late mt-6 max-w-xl text-lg leading-8 text-cream/80">
            Performance sportswear for the miles, sessions, commutes, weekends,
            and everything between.
          </p>
          <div className="reveal reveal-late mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop/new"
              className="min-h-12 bg-copper px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-cream hover:bg-copper-deep"
            >
              Shop New Arrivals
            </Link>
            <Link
              href="/shop/best-sellers"
              className="min-h-12 border border-cream/40 px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-cream hover:border-cream"
            >
              Shop Best Sellers
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`px-8 py-12 ${index > 0 ? "md:border-l md:border-cream/15" : ""}`}
            >
              <h2 className="text-[0.78rem] uppercase tracking-[0.18em] text-copper">
                {feature.title}
              </h2>
              <p className="mt-4 max-w-xs text-cream/75 leading-7">{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">New arrivals</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">New season. Same momentum.</h2>
          </div>
          <p className="max-w-md text-ink-soft leading-7">
            Fresh layers, training staples, and everyday pieces built around movement.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <Link
          href="/shop/new"
          className="mt-10 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
        >
          Shop New Arrivals
        </Link>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Running</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Start where you are.</h2>
            <p className="mt-5 max-w-md leading-8 text-cream/80">
              Morning miles along the river. Fast laps before work. Long runs with
              nowhere else to be. Designed for rhythm, repeat wear, and the miles
              that become part of your week.
            </p>
            <Link
              href="/shop/running"
              className="mt-8 inline-block min-h-12 bg-copper px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-cream hover:bg-copper-deep"
            >
              Shop Running
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/shop/men" className="bg-ink/40 p-8 min-h-48">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/50">Shop</p>
              <h3 className="display mt-3 text-3xl">Men</h3>
              <p className="mt-3 text-sm text-cream/70">Performance with a quieter point of view.</p>
            </Link>
            <Link href="/shop/women" className="bg-ink/40 p-8 min-h-48">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-cream/50">Shop</p>
              <h3 className="display mt-3 text-3xl">Women</h3>
              <p className="mt-3 text-sm text-cream/70">Designed to move. Easy enough to live in.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
        <div className="bg-paper-deep p-8 md:p-12">
          <svg viewBox="0 0 400 320" className="w-full" aria-hidden="true">
            <rect width="400" height="320" fill="#e8dfd0" />
            <path d="M40 250C90 180 140 200 200 140C260 80 300 90 360 40" stroke="#b85c38" strokeWidth="2" fill="none" />
            <circle cx="120" cy="200" r="46" fill="#243d30" />
            <circle cx="250" cy="150" r="46" fill="#1a1612" />
            <circle cx="185" cy="168" r="10" fill="#b85c38" />
          </svg>
        </div>
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Lifestyle</p>
          <h2 className="display mt-3 text-4xl leading-tight md:text-5xl">Sport, off the clock.</h2>
          <p className="mt-5 text-ink-soft leading-8">
            Clean silhouettes. Easy fabrics. Pieces that still make sense after
            the workout is over.
          </p>
          <Link
            href="/shop/lifestyle"
            className="mt-8 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
          >
            Shop Lifestyle
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Best sellers</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">The ones in constant rotation.</h2>
          </div>
          <p className="max-w-md text-ink-soft leading-7">
            The pieces customers reach for again and again.
          </p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-end md:px-8">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Outerwear</p>
            <h2 className="display mt-3 text-4xl md:text-5xl">Weather changes. Plans don&apos;t have to.</h2>
          </div>
          <div>
            <p className="leading-8 text-cream/75">
              Layer up for early starts, cold walks, windy platforms, and everything
              Hudson weather can throw at a day.
            </p>
            <Link
              href="/shop/outerwear"
              className="mt-6 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
            >
              Shop Outerwear
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">Hudson, New York</p>
        <h2 className="display mt-3 max-w-3xl text-4xl md:text-5xl">Hudson is part of the design.</h2>
        <p className="mt-6 max-w-2xl text-ink-soft leading-8">
          We come from a place where city energy meets open space. That contrast
          shapes Van & Matthew: technical but relaxed, minimal but never sterile,
          ready for motion without looking overbuilt.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-[0.75rem] uppercase tracking-[0.16em] text-copper underline-offset-4 hover:underline"
        >
          Our Story
        </Link>
      </section>

      <Newsletter />
    </>
  );
}
