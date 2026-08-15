import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { AnnouncementBar } from "@/components/AnnouncementBar";
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
    default: "Van & Matthew | Sportswear from Hudson, New York",
    template: "%s | Van & Matthew",
  },
  description:
    "Modern performance sportswear from Hudson, New York. Shop running, training, lifestyle, outerwear, footwear, and everyday athletic essentials.",
  metadataBase: new URL("https://van-matthew.vercel.app"),
  openGraph: {
    title: "Van & Matthew | Sportswear from Hudson, New York",
    description:
      "Performance sportswear, built with an Upstate point of view. Built in Hudson. Made to move.",
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
          <AnnouncementBar />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
