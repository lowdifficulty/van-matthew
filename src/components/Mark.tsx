type MarkProps = {
  className?: string;
  title?: string;
};

export function Mark({ className = "h-8 w-8", title = "Van & Matthew" }: MarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <rect width="64" height="64" rx="4" fill="#243d30" />
      <path
        d="M14 44C18 28 24 18 32 18C28 26 26 34 28 46"
        stroke="#fbf7f0"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M50 44C46 28 40 18 32 18C36 26 38 34 36 46"
        stroke="#b85c38"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="18" r="2" fill="#b85c38" />
    </svg>
  );
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Mark className={compact ? "h-7 w-7" : "h-8 w-8"} />
      <span
        className={`display tracking-[0.18em] uppercase text-ink ${
          compact ? "text-[0.7rem]" : "text-[0.78rem]"
        }`}
      >
        Van & Matthew
      </span>
    </span>
  );
}
