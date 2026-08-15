import Link from "next/link";
import { ProductVisual } from "@/components/ProductVisual";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/product/${product.slug}`} className="block">
        <ProductVisual
          product={product}
          className="aspect-[5/4] transition-transform duration-500 group-hover:-translate-y-1"
        />
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-medium tracking-tight">{product.name}</h3>
            <p className="mt-1 text-sm text-ink-soft">{product.tagline}</p>
          </div>
          <p className="shrink-0 text-sm">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-mist">
          {product.line} · {product.category}
        </p>
      </Link>
    </article>
  );
}
