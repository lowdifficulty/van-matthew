import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCart } from "@/components/AddToCart";
import { ProductCard } from "@/components/ProductCard";
import { ProductVisual } from "@/components/ProductVisual";
import { formatPrice, getProduct, products } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Piece" };
  return {
    title: product.name,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.slug !== product.slug && item.line === product.line).slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-mist">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>
        <span aria-hidden="true"> / </span>
        <Link href={`/shop/${product.line}`} className="hover:text-ink">
          {product.line}
        </Link>
      </p>
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div className="space-y-4">
          {product.colors.map((color, index) => (
            <ProductVisual
              key={color.name}
              product={product}
              colorIndex={index}
              className="aspect-[5/4]"
            />
          ))}
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-bronze-deep">
            {product.category}
          </p>
          <h1 className="display mt-3 text-5xl">{product.name}</h1>
          <p className="mt-3 text-xl">{formatPrice(product.price)}</p>
          <p className="mt-6 text-ink-soft leading-8">{product.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            {product.details.map((detail) => (
              <li key={detail} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-bronze" />
                {detail}
              </li>
            ))}
          </ul>
          <AddToCart product={product} />
        </div>
      </div>
      {related.length > 0 ? (
        <section className="mt-24">
          <h2 className="display text-3xl">Also from {product.line}</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
