import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PUREON",
    short_name: "PUREON",
    description: "From Nature to Quality.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf5",
    theme_color: "#f5c52b",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
