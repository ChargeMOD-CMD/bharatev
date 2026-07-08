/**
 * Centralized Bharat EV brand constants — extracted from the official logo.
 * Use these for SVG / Framer Motion values that cannot read CSS variables.
 */
export const brandColors = {
  primary: "#1F9E28", // logo green
  primaryDeep: "#157A1E",
  glow: "#55B00A", // leaf green
  secondary: "#10306B", // logo navy
  dark: "#0C2454", // wordmark navy
  darker: "#0A1B3D",
  accent: "#F26A0C", // logo saffron
  light: "#EAF3E7",
  soft: "#F7FAF5",
} as const;

export const brandRgb = {
  primary: "31, 158, 40",
  secondary: "16, 48, 107",
  accent: "242, 106, 12",
} as const;
