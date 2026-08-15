export type Audience = "men" | "women" | "unisex";
export type Activity = "running" | "training" | "lifestyle";
export type Category = "tops" | "bottoms" | "outerwear" | "footwear" | "accessories";
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
  audiences: Audience[];
  activities: Activity[];
  category: Category;
  visual: VisualKind;
  colors: Colorway[];
  sizes: string[];
  description: string;
  details: string[];
  bestFor: string;
  isNew?: boolean;
  bestSeller?: boolean;
  sale?: boolean;
};

export const collections: {
  slug: string;
  title: string;
  kicker: string;
  blurb: string;
  seoTitle: string;
  seoDescription: string;
}[] = [
  {
    slug: "new",
    title: "New Arrivals",
    kicker: "The latest from Hudson",
    blurb:
      "New layers, updated essentials, and performance pieces built for what comes next. No costume changes required.",
    seoTitle: "New Arrivals",
    seoDescription:
      "Shop the newest Van & Matthew performance sportswear, footwear, layers, and everyday athletic essentials.",
  },
  {
    slug: "best-sellers",
    title: "Best Sellers",
    kicker: "Constant rotation",
    blurb:
      "The most-worn, most-reordered, most-recommended pieces in the Van & Matthew rotation. Start here if you are new to the brand.",
    seoTitle: "Best Sellers",
    seoDescription:
      "Shop the most-worn Van & Matthew staples: clean design, dependable performance, and comfort that holds up.",
  },
  {
    slug: "men",
    title: "Men",
    kicker: "A quieter point of view",
    blurb:
      "Performance pieces with a quieter point of view. Built for training days, travel days, long walks, early runs, and everything stacked between them.",
    seoTitle: "Men's Sportswear",
    seoDescription:
      "Shop men's running, training, outerwear, tops, bottoms, footwear, and accessories from Van & Matthew.",
  },
  {
    slug: "women",
    title: "Women",
    kicker: "Designed to move",
    blurb:
      "Designed to move. Easy enough to live in. Performance sportswear made around real routines: hard sessions, quick errands, and long weekends.",
    seoTitle: "Women's Sportswear",
    seoDescription:
      "Shop women's running, training, outerwear, tops, bottoms, footwear, and accessories from Van & Matthew.",
  },
  {
    slug: "unisex",
    title: "Unisex",
    kicker: "Fewer rules",
    blurb:
      "Good design does not need more rules. Relaxed silhouettes, shared staples, and versatile layers built to be worn your way.",
    seoTitle: "Unisex",
    seoDescription: "Shop unisex Van & Matthew staples and shared layers.",
  },
  {
    slug: "running",
    title: "Running",
    kicker: "Find your pace",
    blurb:
      "Run before breakfast. Run after work. Our running collection is built for consistency: lightweight layers, breathable essentials, and nothing in the way once you settle in.",
    seoTitle: "Running",
    seoDescription:
      "Shop Van & Matthew running apparel, layers, footwear, and accessories designed for everyday miles.",
  },
  {
    slug: "training",
    title: "Training",
    kicker: "Do the work",
    blurb:
      "No speeches required. Training gear should stretch where you need it, stay put where you do not, and disappear once the session starts.",
    seoTitle: "Training",
    seoDescription:
      "Shop Van & Matthew training apparel and gym essentials for strength, conditioning, mobility, and daily movement.",
  },
  {
    slug: "lifestyle",
    title: "Lifestyle",
    kicker: "Sport, off the clock",
    blurb:
      "Athletic influence. Everyday proportions. Comfort, movement, and utility in a quieter everyday shape.",
    seoTitle: "Lifestyle Sportswear",
    seoDescription:
      "Clean everyday sportswear informed by performance, movement, and Hudson, New York.",
  },
  {
    slug: "outerwear",
    title: "Outerwear",
    kicker: "Weather is part of it",
    blurb:
      "Layers for cold platforms, windy streets, and the stretch of winter when the sun goes down too early. Technical where it matters. Easy everywhere else.",
    seoTitle: "Outerwear",
    seoDescription:
      "Shop Van & Matthew jackets and layers designed for movement and changing weather.",
  },
  {
    slug: "tops",
    title: "Tops",
    kicker: "Tees, crews, layers",
    blurb: "Technical tees, tanks, crews, and easy layers for the session and the hours after.",
    seoTitle: "Tops",
    seoDescription: "Shop Van & Matthew tees, crews, and technical layers.",
  },
  {
    slug: "bottoms",
    title: "Bottoms",
    kicker: "Shorts, pants, tights",
    blurb: "Shorts, pants, tights, and movement-first staples.",
    seoTitle: "Bottoms",
    seoDescription: "Shop Van & Matthew shorts, pants, and tights.",
  },
  {
    slug: "footwear",
    title: "Footwear",
    kicker: "Built from the ground up",
    blurb:
      "A focused footwear collection designed around comfort, movement, and clean everyday utility.",
    seoTitle: "Footwear",
    seoDescription: "Shop Van & Matthew running, training, and everyday footwear.",
  },
  {
    slug: "accessories",
    title: "Accessories",
    kicker: "The small things do a lot of work",
    blurb:
      "Caps, bags, and everyday carry built to finish the system without overcomplicating it.",
    seoTitle: "Accessories",
    seoDescription: "Shop Van & Matthew bags, caps, and everyday carry.",
  },
  {
    slug: "sale",
    title: "Sale",
    kicker: "Last sizes. Previous seasons.",
    blurb: "Selected Van & Matthew pieces at reduced prices while inventory lasts. Same standards.",
    seoTitle: "Sale",
    seoDescription: "Shop selected Van & Matthew pieces at reduced prices.",
  },
];

export const products: Product[] = [
  {
    slug: "hudson-run-tee",
    name: "Hudson Run Tee",
    tagline: "Everyday miles. Nothing extra.",
    price: 68,
    audiences: ["men", "women", "unisex"],
    activities: ["running", "lifestyle"],
    category: "tops",
    visual: "tee",
    isNew: true,
    bestSeller: true,
    bestFor: "Daily running, travel, warm-weather training",
    colors: [
      { name: "Parchment", hex: "#f4efe6", accent: "#1a1612" },
      { name: "Ink", hex: "#1a1612", accent: "#fbf7f0" },
      { name: "Copper", hex: "#b85c38", accent: "#fbf7f0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A lightweight running tee built around easy movement and repeat wear. Clean enough for the rest of the day, with a fit intended to disappear once you find your pace.",
    details: [
      "Built for daily miles and warm-weather training",
      "Standard fit that stays out of the way",
      "Soft, breathable jersey with a dry hand",
      "Unbranded hem — house stamp inside only",
    ],
  },
  {
    slug: "river-training-short",
    name: "River Training Short",
    tagline: "Built for the work between warm-up and done.",
    price: 78,
    audiences: ["men"],
    activities: ["training"],
    category: "bottoms",
    visual: "short",
    isNew: true,
    bestFor: "Strength, conditioning, general training",
    colors: [
      { name: "Ink", hex: "#1a1612", accent: "#b85c38" },
      { name: "Forest", hex: "#243d30", accent: "#f4efe6" },
    ],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A versatile training short with a streamlined silhouette, movement-first patterning, and low-profile storage. Stretch where you need it. Stay put where you do not.",
    details: [
      "Streamlined silhouette for lifting and circuits",
      "Low-profile storage that does not slap",
      "Four-way stretch woven",
      "Split side for a longer step",
    ],
  },
  {
    slug: "warren-street-crew",
    name: "Warren Street Crew",
    tagline: "Athletic comfort, minus the locker-room look.",
    price: 118,
    audiences: ["men", "women", "unisex"],
    activities: ["lifestyle", "training"],
    category: "tops",
    visual: "fleece",
    bestSeller: true,
    bestFor: "Warm-ups, travel, daily wear",
    colors: [
      { name: "Oat", hex: "#e8dfd0", accent: "#243d30" },
      { name: "River", hex: "#243d30", accent: "#fbf7f0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A structured crewneck designed to sit between training gear and everyday sportswear. Athletic comfort without the gym-only look.",
    details: [
      "Midweight fleece with a clean face",
      "Set-in sleeve, finished hem",
      "Warm-up ready, travel friendly",
      "Works over a tee or under a shell",
    ],
  },
  {
    slug: "north-bay-shell",
    name: "North Bay Shell",
    tagline: "For weather that cannot make up its mind.",
    price: 248,
    audiences: ["men", "women"],
    activities: ["running", "lifestyle"],
    category: "outerwear",
    visual: "jacket",
    isNew: true,
    bestFor: "Wind, transitional weather, commuting",
    colors: [
      { name: "Forest", hex: "#243d30", accent: "#fbf7f0" },
      { name: "Ink", hex: "#1a1612", accent: "#b85c38" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A clean outer layer for changing conditions, light layering, and movement through town or quieter roads. Technical where it matters. Easy everywhere else.",
    details: [
      "Light weather protection for wind and mist",
      "Packs into itself for the train",
      "Articulated sleeves, hidden hood",
      "Matte hardware, no shoulder branding",
    ],
  },
  {
    slug: "catskill-warmup-pant",
    name: "Catskill Warm-Up Pant",
    tagline: "Easy on. Hard to take out of rotation.",
    price: 128,
    audiences: ["men", "women"],
    activities: ["training", "lifestyle"],
    category: "bottoms",
    visual: "pant",
    bestSeller: true,
    bestFor: "Warm-ups, recovery, travel",
    colors: [
      { name: "Char", hex: "#1a1612", accent: "#b85c38" },
      { name: "Stone", hex: "#7a7268", accent: "#fbf7f0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A tapered warm-up pant designed for pre-session movement, travel, and everyday wear. Soft enough for recovery. Structured enough for the platform.",
    details: [
      "Tapered ankle, easy rise",
      "Brushed stretch twill",
      "Deep side pockets",
      "Tone-on-tone side piped detail",
    ],
  },
  {
    slug: "station-pack",
    name: "Station Pack",
    tagline: "The bag that leaves when you do.",
    price: 128,
    audiences: ["unisex"],
    activities: ["training", "lifestyle"],
    category: "accessories",
    visual: "pack",
    bestSeller: true,
    bestFor: "Gym, work, train, weekend",
    colors: [
      { name: "Forest", hex: "#243d30", accent: "#fbf7f0" },
      { name: "Clay", hex: "#b85c38", accent: "#f4efe6" },
    ],
    sizes: ["One size"],
    description:
      "A compact everyday training bag with space for the essentials and a silhouette clean enough for commuting. The bag that leaves when you do.",
    details: [
      "Main compartment plus a laptop sleeve",
      "Front pocket you do not need a map for",
      "Padded straps, removable sternum strap",
      "Leather zipper pulls, house-stamped",
    ],
  },
  {
    slug: "warren-mile-runner",
    name: "Warren Mile Runner",
    tagline: "A long-mile last with a quiet midsole.",
    price: 168,
    audiences: ["men", "women"],
    activities: ["running"],
    category: "footwear",
    visual: "runner",
    isNew: true,
    bestFor: "Daily miles, tempo, commuting on foot",
    colors: [
      { name: "Harbor Ink", hex: "#243d30", accent: "#fbf7f0" },
      { name: "Vale Clay", hex: "#b85c38", accent: "#f4efe6" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description:
      "The house runner: a refined last, a composed midsole, and an upper that disappears on the foot. Built for the miles that become part of your week.",
    details: [
      "Responsive foam that stays composed",
      "Breathable knit vamp",
      "Gum-speckle outsole for wet pavement",
      "Unbranded tongue",
    ],
  },
  {
    slug: "promenade-trainer",
    name: "Promenade Trainer",
    tagline: "A low trainer for the rest of the week.",
    price: 148,
    audiences: ["men", "women"],
    activities: ["training", "lifestyle"],
    category: "footwear",
    visual: "court",
    bestFor: "Studio floors, errands, travel days",
    colors: [
      { name: "Parchment", hex: "#f4efe6", accent: "#1a1612" },
      { name: "Copper", hex: "#b85c38", accent: "#1a1612" },
    ],
    sizes: ["6", "7", "8", "9", "10", "11", "12", "13"],
    description:
      "A focused trainer designed around comfort, movement, and clean everyday utility. Thin enough to feel the floor. Thick enough for cobblestones.",
    details: [
      "Cushioned sockliner, removable",
      "Flexible cupsole",
      "Clean foxing, no panel theater",
      "Unlined collar for a softer break-in",
    ],
  },
  {
    slug: "olana-daily-tight",
    name: "Olana Daily Tight",
    tagline: "Support that does not announce itself.",
    price: 98,
    audiences: ["women"],
    activities: ["running", "training"],
    category: "bottoms",
    visual: "pant",
    bestSeller: true,
    bestFor: "Everyday miles, studio sessions, errands after",
    colors: [
      { name: "Ink", hex: "#1a1612", accent: "#b85c38" },
      { name: "Forest", hex: "#243d30", accent: "#fbf7f0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A close-fit tight for the runs and sessions that make up most of the week. Supportive without looking engineered. Easy enough to live in after.",
    details: [
      "Close fit, high rise",
      "Hidden waist pocket",
      "Matte face, no shine",
      "Designed to pair with the Hudson Run Tee",
    ],
  },
  {
    slug: "cold-spring-vest",
    name: "Cold Spring Vest",
    tagline: "Warmth without the extra sleeve story.",
    price: 168,
    audiences: ["men", "women"],
    activities: ["lifestyle", "running"],
    category: "outerwear",
    visual: "jacket",
    bestFor: "Cold starts, layering, windy platforms",
    colors: [
      { name: "Forest", hex: "#243d30", accent: "#fbf7f0" },
      { name: "Copper", hex: "#b85c38", accent: "#f4efe6" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A clean insulated vest for mornings when leaving the house is the hardest rep. Useful warmth, mobility, and a silhouette that still looks like clothing.",
    details: [
      "Light insulation, free arms",
      "Two-way front, high collar",
      "Packs into its own pocket",
      "Works over a crew or under a shell",
    ],
  },
  {
    slug: "beacon-layer-tee",
    name: "Beacon Layer Tee",
    tagline: "A training shirt that can leave the studio.",
    price: 58,
    audiences: ["men", "women"],
    activities: ["training"],
    category: "tops",
    visual: "tee",
    sale: true,
    bestFor: "Strength, conditioning, daily movement",
    colors: [
      { name: "Parchment", hex: "#f4efe6", accent: "#1a1612" },
      { name: "Ink", hex: "#1a1612", accent: "#fbf7f0" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    description:
      "A midweight training tee with a set-in sleeve and a neck that stays put. It wicks without turning glossy. Previous-season colorways, same standard.",
    details: [
      "Side seams moved back for motion",
      "Garment-dyed, will soften",
      "Pairs with the River Training Short",
      "Selected colorways on sale while they last",
    ],
  },
  {
    slug: "columbia-street-cap",
    name: "Columbia Street Cap",
    tagline: "Shade, then get on with it.",
    price: 32,
    audiences: ["unisex"],
    activities: ["running", "lifestyle"],
    category: "accessories",
    visual: "pack",
    sale: true,
    bestFor: "Runs, errands, bright platforms",
    colors: [
      { name: "Ink", hex: "#1a1612", accent: "#b85c38" },
      { name: "Forest", hex: "#243d30", accent: "#fbf7f0" },
    ],
    sizes: ["One size"],
    description:
      "A low-profile cap that finishes the system without overcomplicating it. Previous-season colorways. Same construction.",
    details: [
      "Unstructured crown, curved brim",
      "Adjustable back",
      "Sweatband that actually works",
      "House stamp inside, not on the front",
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
  return products.filter((product) => {
    if (slug === "new") return Boolean(product.isNew);
    if (slug === "best-sellers") return Boolean(product.bestSeller);
    if (slug === "sale") return Boolean(product.sale);
    if (slug === "men" || slug === "women" || slug === "unisex") {
      return product.audiences.includes(slug);
    }
    if (slug === "running" || slug === "training" || slug === "lifestyle") {
      return product.activities.includes(slug);
    }
    if (
      slug === "tops" ||
      slug === "bottoms" ||
      slug === "outerwear" ||
      slug === "footwear" ||
      slug === "accessories"
    ) {
      return product.category === slug;
    }
    return false;
  });
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
