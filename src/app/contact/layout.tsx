import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write Van & Matthew at the Hudson atelier.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
