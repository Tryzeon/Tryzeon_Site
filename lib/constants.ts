export const brand = {
  lightBg: "#F8F5F1",
  deepBeige: "#B8A094",
  ink: "#0B0B0B",
  accent: "#1E90FF",
} as const;

export interface CTAButton {
  label: string;
  href: string;
}

export interface Slide {
  kicker: string;
  title: string;
  desc: string;
  image: string;
  video?: string;
  cta: CTAButton;
}
