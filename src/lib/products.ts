export type Audience = "men" | "women" | "youth";
export type Line = "atelier" | "studio" | "trail";
export type VisualKind =
  | "runner"
  | "court"
  | "knit"
  | "slip"
  | "jacket"
  | "fleece"
  | "tee"
  | "short"
  | "pant"
  | "pack";

export type Colorway = {
  name: string;
  hex: string;
  accent: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  line: Line;
  audiences: Audience[];
  category: string;
  visual: VisualKind;
  colors: Colorway[];
  sizes: string[];
  description: string;
  details: string[];
  featured?: boolean;
};

export const collections: {
  slug: Line | Audience;
  title: string;
  kicker: string;
  blurb: string;
}[] = [
  {
    slug: "atelier",
    title: "Atelier",
    kicker: "Lived-in ease",
    blurb: "Knits, courts, and city pieces cut for the hours between sessions.",
  },
  {
    slug: "studio",
    title: "Studio",
    kicker: "Quiet work",
    blurb: "Training layers with a low profile and a long memory for motion.",
  },
  {
    slug: "trail",
    title: "Trail",
    kicker: "Weathered light",
    blurb: "Shells, packs, and fleece for dawn paths and late returns.",
  },
  {
    slug: "men",
    title: "Men",
    kicker: "The house fit",
    blurb: "A considered edit for daily training and the walk home.",
  },
  {
    slug: "women",
    title: "Women",
    kicker: "Held, not loud",
    blurb: "Proportion, drape, and pace — nothing borrowed from a menswear last.",
  },
  {
    slug: "youth",
    title: "Youth",
    kicker: "First miles",
    blurb: "Smaller scale, same materials language. Built to be outgrown slowly.",
  },
];

export const products: Product[] = [
  {
    slug: "meridian-runner",
    name: "Meridian Runner",
    tagline: "A long-mile last with a quiet midsole.",
    price: 188,
    line: "studio",
    audiences: ["men", "women"],
    category: "Footwear",
    visual: "runner",
    featured: true,
    colors: [
      { name: "Harbor Ink", hex: "#243028", accent: "#c4b08a" },
      { name: "Vale Clay", hex: "#8c5340", accent: "#e7dfd0" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description:
      "Meridian is the house runner: a refined last, a responsive foam that stays composed past the tenth mile, and an upper that disappears on the foot. Designed by Matthew for tempo; finished by Van for the walk to coffee after.",
    details: [
      "Dual-density midsole with a carved crash pad",
      "Breathable knit vamp, reinforced at the medial wrap",
      "Gum-speckle outsole for wet pavement and studio floors",
      "Recycled mesh lining, unbranded tongue",
    ],
  },
  {
    slug: "vale-court",
    name: "Vale Court",
    tagline: "A low court silhouette for the rest of the week.",
    price: 164,
    line: "atelier",
    audiences: ["men", "women"],
    category: "Footwear",
    visual: "court",
    featured: true,
    colors: [
      { name: "Paper", hex: "#e7dfd0", accent: "#3d3830" },
      { name: "Bronze", hex: "#9a7040", accent: "#16130f" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description:
      "Vale Court sits between a training shoe and a city shoe. The cupsole is thin enough to feel the floor, thick enough for cobblestones. No panel theater — just a clean foxing and a leather that darkens with weather.",
    details: [
      "Full-grain leather upper, vegetable-tanned",
      "Cushioned sockliner, removable",
      "Herringbone gum outsole",
      "Unlined collar for a softer break-in",
    ],
  },
  {
    slug: "solace-knit",
    name: "Solace Knit",
    tagline: "A sock-like trainer that still holds a line.",
    price: 156,
    line: "atelier",
    audiences: ["women"],
    category: "Footwear",
    visual: "knit",
    featured: true,
    colors: [
      { name: "Mist", hex: "#8a8376", accent: "#f3eee4" },
      { name: "Clay Rose", hex: "#b45a3c", accent: "#e7dfd0" },
    ],
    sizes: ["5", "6", "7", "8", "9", "10", "11"],
    description:
      "Solace is knit as a single piece, then set on a sculpted foam that keeps the heel honest. It is the shoe Van wears on travel days: soft, exact, and unwilling to look like a slipper.",
    details: [
      "One-piece performance knit",
      "Internal heel counter, barely there",
      "Lightweight foam with a carved waist",
      "Reflective yarn at the collar, visible only at night",
    ],
  },
  {
    slug: "ember-slip",
    name: "Ember Slip",
    tagline: "An evening shoe that still respects a morning.",
    price: 142,
    line: "atelier",
    audiences: ["men", "women"],
    category: "Footwear",
    visual: "slip",
    colors: [
      { name: "Soot", hex: "#2a2622", accent: "#9a7040" },
      { name: "Sand", hex: "#d4cbb8", accent: "#3d3830" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    description:
      "Ember Slip is a covered-vamp silhouette with a hidden elastic and a leather footbed. It is for kitchens, galleries, and the last train — not for pretending to be a runner.",
    details: [
      "Suede vamp with elastic goring",
      "Leather-covered footbed",
      "Flexible cupsole",
      "Packed in a reusable cotton sleeve",
    ],
  },
  {
    slug: "northline-shell",
    name: "Northline Shell",
    tagline: "A three-layer jacket that refuses noise.",
    price: 248,
    line: "trail",
    audiences: ["men", "women"],
    category: "Outerwear",
    visual: "jacket",
    featured: true,
    colors: [
      { name: "Forest", hex: "#243028", accent: "#c4b08a" },
      { name: "Ink", hex: "#16130f", accent: "#8a8376" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Northline is the house shell: taped seams, a hidden hood, and a drape that looks like a coat until the weather asks otherwise. Matthew cut the pattern after a wet week in the Gunks; Van insisted the hardware stay matte.",
    details: [
      "3-layer recycled membrane, 20k/20k",
      "Pit zips, two-way front",
      "Packs into its own chest pocket",
      "Articulated elbows, no logos at the shoulder",
    ],
  },
  {
    slug: "harbor-fleece",
    name: "Harbor Fleece",
    tagline: "A half-zip that behaves like a sweater.",
    price: 148,
    line: "trail",
    audiences: ["men"],
    category: "Layers",
    visual: "fleece",
    colors: [
      { name: "Oat", hex: "#c4b08a", accent: "#243028" },
      { name: "River", hex: "#3a4a46", accent: "#e7dfd0" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Harbor Fleece is brushed on the inside, clean on the face, and cut slightly long so it sits under a shell without riding. The half-zip is for temperature, not for a logo window.",
    details: [
      "Recycled pile face, grid backer",
      "Matte zip, leather pull",
      "Hand pockets set high for a pack belt",
      "Finished hem, no drawcord theater",
    ],
  },
  {
    slug: "lumen-tee",
    name: "Lumen Tee",
    tagline: "A training shirt that can leave the studio.",
    price: 68,
    line: "studio",
    audiences: ["men", "women"],
    category: "Tops",
    visual: "tee",
    colors: [
      { name: "Paper", hex: "#f3eee4", accent: "#16130f" },
      { name: "Ink", hex: "#16130f", accent: "#f3eee4" },
      { name: "Bronze", hex: "#9a7040", accent: "#f3eee4" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Lumen is a midweight jersey with a set-in sleeve and a neck that stays put. It wicks without turning glossy. The only mark is a small house stamp at the hem, inside.",
    details: [
      "Organic cotton / TENCEL blend",
      "Side seams moved back for motion",
      "Garment-dyed, will soften",
      "Designed to pair with Ridge Short or Cinder Pant",
    ],
  },
  {
    slug: "ridge-short",
    name: "Ridge Short",
    tagline: "A 7-inch short with real pockets.",
    price: 78,
    line: "studio",
    audiences: ["men"],
    category: "Bottoms",
    visual: "short",
    colors: [
      { name: "Ink", hex: "#16130f", accent: "#c4b08a" },
      { name: "Olive", hex: "#4a5340", accent: "#e7dfd0" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Ridge Short is cut for a stride, not a photoshoot. The inseam is 7 inches. The pockets hold a phone without slapping. The liner is optional and sold separately — we assume you know your own heat.",
    details: [
      "Four-way stretch woven",
      "Bonded hem, no stitch chatter",
      "Split side for a longer step",
      "Hidden key loop",
    ],
  },
  {
    slug: "cinder-pant",
    name: "Cinder Track Pant",
    tagline: "A tapered pant that still sits like clothing.",
    price: 118,
    line: "studio",
    audiences: ["women"],
    category: "Bottoms",
    visual: "pant",
    colors: [
      { name: "Char", hex: "#2c2a28", accent: "#9a7040" },
      { name: "Stone", hex: "#8a8376", accent: "#16130f" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "Cinder is a track pant that borrowed its drape from a trouser. High rise, tapered ankle, and a waistband that does not announce itself. For the studio, the platform, and the train.",
    details: [
      "Brushed stretch twill",
      "Piped side, tone-on-tone",
      "Zip ankle, matte",
      "Deep side pockets, one rear",
    ],
  },
  {
    slug: "atlas-pack",
    name: "Atlas Pack",
    tagline: "Eighteen liters. No extra story.",
    price: 128,
    line: "trail",
    audiences: ["men", "women"],
    category: "Goods",
    visual: "pack",
    colors: [
      { name: "Forest", hex: "#243028", accent: "#c4b08a" },
      { name: "Clay", hex: "#8c5340", accent: "#e7dfd0" },
    ],
    sizes: ["One size"],
    description:
      "Atlas is an 18-liter day pack with a single main compartment, a laptop sleeve, and a front pocket that does not require a map to use. The silhouette is a quiet rectangle. The straps are padded where it matters.",
    details: [
      "Weathered canvas with a recycled lining",
      "Padded 14-inch sleeve",
      "Sternum strap, removable",
      "Leather zipper pulls, house-stamped",
    ],
  },
  {
    slug: "drift-crew",
    name: "Drift Crew",
    tagline: "A youth knit that can take a season of grass stains.",
    price: 88,
    line: "atelier",
    audiences: ["youth"],
    category: "Tops",
    visual: "tee",
    colors: [
      { name: "River", hex: "#3a4a46", accent: "#e7dfd0" },
      { name: "Paper", hex: "#f3eee4", accent: "#16130f" },
    ],
    sizes: ["8Y", "10Y", "12Y", "14Y"],
    description:
      "Drift Crew is a heavier jersey for younger shoulders. The neck is bound, the hem is straight, and the dye will take a summer of light. We do not print cartoons on it.",
    details: [
      "Organic cotton jersey",
      "Reinforced shoulder seams",
      "Same house stamp as the adult Lumen, smaller",
      "Machine wash, hang dry if you can",
    ],
  },
  {
    slug: "kin-youth-trainer",
    name: "Kin Youth Trainer",
    tagline: "A first trainer with an adult last, scaled.",
    price: 98,
    line: "studio",
    audiences: ["youth"],
    category: "Footwear",
    visual: "runner",
    colors: [
      { name: "Harbor Ink", hex: "#243028", accent: "#c4b08a" },
      { name: "Vale Clay", hex: "#8c5340", accent: "#e7dfd0" },
    ],
    sizes: ["1Y", "2Y", "3Y", "4Y", "5Y", "6Y"],
    description:
      "Kin is Meridian’s younger sibling: the same carved midsole language, a tougher toe, and a closure that a child can manage. Built to be outgrown slowly, then handed down.",
    details: [
      "Hook-and-loop plus a lace option",
      "Wider toe than most youth lasts",
      "Easy-clean outsole",
      "Removable insole for growing room",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function productsFor(slug: string) {
  return products.filter(
    (product) => product.line === slug || product.audiences.includes(slug as Audience),
  );
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function collectionTitle(slug: string) {
  return getCollection(slug)?.title ?? slug;
}
