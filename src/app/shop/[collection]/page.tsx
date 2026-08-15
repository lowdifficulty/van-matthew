import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { collections, getCollection, productsFor } from "@/lib/products";

type Props = {
  params: Promise<{ collection: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ collection: collection.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection: slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.seoTitle,
    description: collection.seoDescription,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { collection: slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = productsFor(slug);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-copper">
        {collection.kicker}
      </p>
      <h1 className="display mt-3 text-5xl md:text-6xl">{collection.title}</h1>
      <p className="mt-5 max-w-2xl text-ink-soft leading-7">{collection.blurb}</p>
      <p className="mt-6">
        <Link
          href="/shop"
          className="text-[0.72rem] uppercase tracking-[0.16em] text-mist hover:text-ink"
        >
          Shop all
        </Link>
      </p>
      {items.length === 0 ? (
        <p className="mt-14 text-ink-soft">
          Nothing here right now. Clear a filter or check back for the next drop.
        </p>
      ) : (
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
