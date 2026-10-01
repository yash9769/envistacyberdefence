import logoUrl from "../imports/envista-logo.png";
import logoDarkUrl from "../imports/envista-logo-dark.png";

/* Full Envista lockup (shield + wordmark + tagline), rendered exactly as
   supplied — no glow, no recolouring. */
export default function Logo({
  className = "h-9",
  variant = "auto",
}: {
  className?: string;
  variant?: "light" | "dark" | "auto";
}) {
  return (
    <img
      src={variant === "dark" ? logoDarkUrl : logoUrl}
      alt="Envista Cyber Defence"
      width={1695}
      height={516}
      className={`w-auto select-none ${className}`}
      draggable={false}
    />
  );
}

