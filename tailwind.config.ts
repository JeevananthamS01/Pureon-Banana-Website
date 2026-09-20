const config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        banana: "var(--banana)",
        cream: "var(--cream)",
        cocoa: "var(--cocoa)",
        leaf: "var(--leaf)"
      },
      fontFamily: {
        primary: ["var(--font-primary)", "Arial", "sans-serif"],
        secondary: ["var(--font-secondary)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
