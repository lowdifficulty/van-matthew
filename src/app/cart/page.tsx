"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { ProductVisual } from "@/components/ProductVisual";
import { formatPrice, getProduct } from "@/lib/products";

export default function CartPage() {
  const { lines, setQty, remove, subtotal, clear, ready } = useCart();

  if (!ready) {
    return (
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
        <p className="text-ink-soft">Loading your cart…</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-16 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-bronze-deep">Cart</p>
      <h1 className="display mt-3 text-5xl">Your edit.</h1>

      {lines.length === 0 ? (
        <div className="mt-10">
          <p className="text-ink-soft leading-7">
            The cart is empty. The house is not.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-block min-h-12 bg-ink px-7 text-[0.75rem] uppercase tracking-[0.16em] leading-[3rem] text-paper"
          >
            Shop the house
          </Link>
        </div>
      ) : (
        <>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {lines.map((line) => {
              const product = getProduct(line.slug);
              if (!product) return null;
              return (
                <li key={`${line.slug}-${line.size}`} className="grid gap-4 py-6 sm:grid-cols-[8rem_1fr_auto]">
                  <ProductVisual product={product} className="aspect-square" />
                  <div>
                    <Link href={`/product/${product.slug}`} className="text-lg font-medium">
                      {product.name}
                    </Link>
                    <p className="mt-1 text-sm text-ink-soft">Size {line.size}</p>
                    <p className="mt-1 text-sm">{formatPrice(product.price)}</p>
                    <div className="mt-4 flex items-center gap-3">
                      <label className="text-[0.7rem] uppercase tracking-[0.14em] text-mist" htmlFor={`qty-${line.slug}-${line.size}`}>
                        Qty
                      </label>
                      <input
                        id={`qty-${line.slug}-${line.size}`}
                        type="number"
                        min={1}
                        max={12}
                        value={line.qty}
                        onChange={(event) => setQty(line.slug, line.size, Number(event.target.value))}
                        className="h-10 w-16 border border-line bg-paper px-2"
                      />
                      <button
                        type="button"
                        onClick={() => remove(line.slug, line.size)}
                        className="text-[0.7rem] uppercase tracking-[0.14em] text-mist hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-sm sm:text-right">{formatPrice(product.price * line.qty)}</p>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg">
              Subtotal <span className="font-medium">{formatPrice(subtotal)}</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={clear}
                className="min-h-12 border border-line px-6 text-[0.72rem] uppercase tracking-[0.16em]"
              >
                Clear
              </button>
              <p className="min-h-12 bg-ink px-6 text-[0.72rem] uppercase tracking-[0.16em] leading-[3rem] text-paper">
                Checkout opens in atelier
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            This is a brand preview. No payment is taken — write the house if you want a fitting.
          </p>
        </>
      )}
    </div>
  );
}
