import type { ReactElement } from "react";
import type { Product, VisualKind } from "@/lib/products";

type ProductVisualProps = {
  product: Pick<Product, "name" | "visual" | "colors">;
  colorIndex?: number;
  className?: string;
  priority?: boolean;
};

function Runner({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <ellipse cx="200" cy="196" rx="118" ry="14" fill="#1a1612" opacity="0.08" />
      <path
        d="M72 148c28-38 86-62 148-48 42 10 78 38 86 62 4 12-8 22-28 26-46 8-92 6-138-2-38-6-76-10-80-20-2-6 4-12 12-18z"
        fill={fill}
      />
      <path
        d="M88 140c24-18 70-28 118-16 20 6 38 16 48 26"
        stroke={accent}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M70 164c40 10 90 16 140 12 28-2 56-8 72-16"
        stroke="#1a1612"
        strokeWidth="6"
        opacity="0.18"
        fill="none"
      />
      <path d="M96 128 84 108" stroke={accent} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

function Court({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <ellipse cx="200" cy="198" rx="110" ry="12" fill="#1a1612" opacity="0.08" />
      <path
        d="M78 156c8-36 48-62 110-62 54 0 96 22 112 52 6 12-4 22-24 26H96c-16 0-22-6-18-16z"
        fill={fill}
      />
      <path d="M118 118h92" stroke={accent} strokeWidth="4" />
      <path d="M86 164h228" stroke="#1a1612" strokeWidth="10" opacity="0.2" />
      <rect x="250" y="128" width="28" height="18" rx="3" fill={accent} opacity="0.85" />
    </>
  );
}

function Knit({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <ellipse cx="200" cy="198" rx="100" ry="12" fill="#1a1612" opacity="0.08" />
      <path
        d="M120 150c8-44 36-70 80-70s72 26 80 70c4 18-8 28-28 30H148c-20-2-32-12-28-30z"
        fill={fill}
      />
      <path
        d="M140 128c20-22 40-28 60-28s40 6 60 28"
        stroke={accent}
        strokeWidth="3"
        fill="none"
      />
      <path d="M132 168c22 8 46 12 68 12s46-4 68-12" stroke="#1a1612" strokeWidth="8" opacity="0.16" fill="none" />
    </>
  );
}

function Slip({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <ellipse cx="200" cy="198" rx="108" ry="12" fill="#1a1612" opacity="0.08" />
      <path
        d="M86 160c16-40 70-58 128-46 46 10 86 34 94 52 4 10-10 18-30 20H108c-18 0-26-8-22-26z"
        fill={fill}
      />
      <path d="M150 132c18-8 40-10 62-4" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M90 172h220" stroke="#1a1612" strokeWidth="8" opacity="0.16" />
    </>
  );
}

function Jacket({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <path d="M140 72 200 96l60-24 36 28-24 20v112H128V120l-24-20z" fill={fill} />
      <path d="M200 96v132" stroke={accent} strokeWidth="3" />
      <path d="M164 88c12 16 24 20 36 20s24-4 36-20" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M128 168h144" stroke="#1a1612" strokeWidth="2" opacity="0.2" />
    </>
  );
}

function Fleece({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <rect x="132" y="80" width="136" height="148" rx="18" fill={fill} />
      <path d="M200 80v70" stroke={accent} strokeWidth="4" />
      <circle cx="200" cy="156" r="6" fill={accent} />
      <path d="M132 128h-20v60h20M268 128h20v60h-20" fill={fill} />
    </>
  );
}

function Tee({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <path d="M148 86h104l28 36v110H120V122z" fill={fill} />
      <path d="M148 86c12 22 28 28 52 28s40-6 52-28" stroke={accent} strokeWidth="3" fill="none" />
      <path d="M120 122 92 150v36h28M280 122l28 28v36h-28" fill={fill} />
    </>
  );
}

function Short({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <path d="M128 96h144v36l-12 92H220l-20-72-20 72h-40L128 132z" fill={fill} />
      <path d="M128 128h144" stroke={accent} strokeWidth="4" />
    </>
  );
}

function Pant({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <path d="M146 72h108l8 28-16 172h-40l-6-96-8 96h-40L138 100z" fill={fill} />
      <path d="M146 108h108" stroke={accent} strokeWidth="3" />
    </>
  );
}

function Pack({ fill, accent }: { fill: string; accent: string }) {
  return (
    <>
      <rect x="148" y="88" width="104" height="136" rx="10" fill={fill} />
      <rect x="162" y="108" width="76" height="48" rx="6" stroke={accent} strokeWidth="3" />
      <path d="M164 88c0-18 72-18 72 0" stroke={fill} strokeWidth="10" />
      <path d="M148 168h104" stroke={accent} strokeWidth="3" />
    </>
  );
}

const visuals: Record<
  VisualKind,
  (props: { fill: string; accent: string }) => ReactElement
> = {
  runner: Runner,
  court: Court,
  knit: Knit,
  slip: Slip,
  jacket: Jacket,
  fleece: Fleece,
  tee: Tee,
  short: Short,
  pant: Pant,
  pack: Pack,
};

export function ProductVisual({
  product,
  colorIndex = 0,
  className = "",
}: ProductVisualProps) {
  const color = product.colors[colorIndex] ?? product.colors[0];
  const Shape = visuals[product.visual];

  return (
    <div
      className={`relative overflow-hidden bg-paper-deep ${className}`}
      role="img"
      aria-label={`${product.name} in ${color.name}`}
    >
      <svg viewBox="0 0 400 240" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#e8dfd0" />
        <circle cx="330" cy="36" r="70" fill="#fbf7f0" />
        <Shape fill={color.hex} accent={color.accent} />
      </svg>
    </div>
  );
}
