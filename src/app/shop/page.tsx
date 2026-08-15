import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { collections, products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "The Van & Matthew shop — Atelier, Studio, Trail, and the house edit.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">The shop</p>
      <h1 className="display mt-3 text-5xl md:text-6xl">Every piece we stand behind.</h1>
      <p className="mt-5 max-w-2xl text-ink-soft leading-7">
        Original names, original lasts, original copy. A small house with a
        complete edit — footwear, layers, and goods for studio, trail, and city.
      </p>
      <nav className="mt-10 flex flex-wrap gap-2" aria-label="Collections">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/shop/${collection.slug}`}
            className="border border-line px-4 py-2 text-[0.72rem] uppercase tracking-[0.14em] hover:border-ink"
          >
            {collection.title}
          </Link>
        ))}
      </nav>
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
