import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: "How can we help? Contact Van & Matthew in Hudson, New York.",
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
