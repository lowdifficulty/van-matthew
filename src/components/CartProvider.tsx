"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getProduct } from "@/lib/products";

export type CartLine = {
  slug: string;
  size: string;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  add: (slug: string, size: string, qty?: number) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  ready: boolean;
};

const STORAGE_KEY = "van-matthew-cart";
const CartContext = createContext<CartContextValue | null>(null);

function sameLine(line: CartLine, slug: string, size: string) {
  return line.slug === slug && line.size === size;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      setLines([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const add = (slug: string, size: string, qty = 1) => {
      setLines((current) => {
        const match = current.find((line) => sameLine(line, slug, size));
        if (match) {
          return current.map((line) =>
            sameLine(line, slug, size) ? { ...line, qty: line.qty + qty } : line,
          );
        }
        return [...current, { slug, size, qty }];
      });
    };

    const setQty = (slug: string, size: string, qty: number) => {
      setLines((current) =>
        qty <= 0
          ? current.filter((line) => !sameLine(line, slug, size))
          : current.map((line) => (sameLine(line, slug, size) ? { ...line, qty } : line)),
      );
    };

    const remove = (slug: string, size: string) => {
      setLines((current) => current.filter((line) => !sameLine(line, slug, size)));
    };

    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const subtotal = lines.reduce((sum, line) => {
      const product = getProduct(line.slug);
      return sum + (product ? product.price * line.qty : 0);
    }, 0);

    return {
      lines,
      add,
      setQty,
      remove,
      clear: () => setLines([]),
      count,
      subtotal,
      ready,
    };
  }, [lines, ready]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
