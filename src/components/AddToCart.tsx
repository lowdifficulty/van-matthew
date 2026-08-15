"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import type { Product } from "@/lib/products";

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  function onAdd() {
    add(product.slug, size);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="mt-8 space-y-6">
      <fieldset>
        <legend className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
          Size
        </legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.sizes.map((option) => {
            const selected = option === size;
            return (
              <label
                key={option}
                className={`min-w-12 cursor-pointer border px-3 py-2 text-center text-sm ${
                  selected ? "border-ink bg-ink text-paper" : "border-line bg-paper"
                }`}
              >
                <input
                  type="radio"
                  name="size"
                  value={option}
                  checked={selected}
                  onChange={() => setSize(option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>
      <button
        type="button"
        onClick={onAdd}
        className="min-h-12 w-full bg-ink text-[0.78rem] uppercase tracking-[0.18em] text-paper transition-colors hover:bg-forest md:w-auto md:px-10"
      >
        {added ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
