import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Van & Matthew",
    template: "%s — Van & Matthew",
  },
  description:
    "Van & Matthew is a dual-founder athletic house. Quiet luxury, considered performance, original pieces for studio, trail, and the hours between.",
  metadataBase: new URL("https://van-matthew.vercel.app"),
  openGraph: {
    title: "Van & Matthew",
    description:
      "A dual-founder athletic house. Refined, confident, and built for people who move with intention.",
    siteName: "Van & Matthew",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <CartProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
