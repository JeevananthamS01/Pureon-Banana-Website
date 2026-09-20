import type { Feature, NavItem, ProcessStep, Testimonial } from "@/types/site";

export const site = {
  name: "PUREON",
  tagline: "From Nature to Quality.",
  description:
    "PUREON is a manufacturing and export company specializing in banana powder and a variety of fruit and vegetable dry powders. Established in December 2025, we are committed to delivering quality, hygienically processed, and reliable natural food ingredients.",
  about:
    "We serve both local and international markets, focusing on consistent quality, dependable supply, and customer satisfaction.",
  address: "Coimbatore, Tamil Nadu – 641407, India",
  phone: "+91 63807 06477",
  phoneSecondary: "+91 98765 43210",
  email: "pureonsample@gmail.com",
  instagram: "https://www.instagram.com/pureon_4",
  whatsapp: "https://wa.me/916380706477",
  hours: "Monday – Saturday · 9:00 AM – 6:00 PM",
  product: {
    name: "Nendharam Banana Health Mix",
    shortName: "Banana Health Mix",
    weight: "250 g",
    mrp: "₹350",
    front: "/images/products/product-front.png",
    back: "/images/products/product-back.png",
    ingredients: [
      "100% Banana Powder",
      "Organic Cereals (Badam, Cashew)",
      "Milk Solids",
      "Natural Vitamins & Minerals",
    ],
    benefits: [
      "Supports Healthy Growth",
      "Improves Digestion",
      "Boosts Immunity",
      "Brain Development",
      "Weight Gain",
    ],
    usage: [
      "Take 2 tablespoons (15g) of PUREON Banana Health Mix",
      "Add 150–180 ml of warm milk",
      "Mix well for 2 to 3 minutes and serve",
      "Add sugar or honey for taste",
    ],
    nutrition: [
      ["Energy", "386.97"],
      ["Calcium", "5.390"],
      ["Protein", "3.45"],
      ["Fat", "1.228"],
      ["Carbohydrate", "90.528"],
      ["Iron", "0.62"],
    ],
    features: [
      "Premium Banana",
      "No Preservatives",
      "No Colors",
      "Easy to Digest",
    ],
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Products", href: "#products", id: "products" },
  { label: "What We Offer", href: "#offer", id: "offer" },
  { label: "Process", href: "#process", id: "process" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const features: Feature[] = [
  {
    title: "Natural Food Ingredients",
    description:
      "Reliable natural food ingredients prepared around the quality of fruit and vegetable dry powders.",
    icon: "leaf",
  },
  {
    title: "Hygienically Processed",
    description:
      "A quality-focused approach to processing, handling and packaging for dependable food ingredients.",
    icon: "shield",
  },
  {
    title: "Consistent Quality",
    description:
      "PUREON focuses on consistent quality and dependable supply for local and international markets.",
    icon: "spark",
  },
  {
    title: "Export Ready",
    description:
      "Serving local and international markets with a customer-focused approach to natural ingredients.",
    icon: "globe",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Sourcing",
    description:
      "Select quality raw bananas as the starting point for PUREON banana powder.",
    icon: "sprout",
  },
  {
    number: "02",
    title: "Cleaning",
    description:
      "Prepare the raw material through hygienic handling before processing.",
    icon: "water",
  },
  {
    number: "03",
    title: "Drying",
    description:
      "Dry the banana material to create a stable ingredient for grinding.",
    icon: "sun",
  },
  {
    number: "04",
    title: "Grinding",
    description:
      "Grind the dried banana into a fine powder suitable for the health mix.",
    icon: "grain",
  },
  {
    number: "05",
    title: "Quality Testing",
    description:
      "Maintain a quality-focused process before the product reaches packaging.",
    icon: "check",
  },
  {
    number: "06",
    title: "Packaging",
    description:
      "Pack the finished banana health mix for dependable supply and use.",
    icon: "package",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Retail Partner",
    role: "Coimbatore",
    quote:
      "The product presentation is clear and the banana health mix is easy to prepare and serve.",
  },
  {
    name: "Family Customer",
    role: "Tamil Nadu",
    quote:
      "We like the simple preparation and the focus on banana as the main ingredient.",
  },
  {
    name: "Trade Enquiry",
    role: "International Market",
    quote:
      "PUREON communicates its product details clearly and keeps the focus on dependable supply.",
  },
];
