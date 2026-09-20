export type NavItem = {
  label: string;
  href: string;
  id: string;
};

export type Feature = {
  title: string;
  description: string;
  icon: "leaf" | "shield" | "spark" | "globe";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "sprout" | "water" | "sun" | "grain" | "check" | "package";
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};
