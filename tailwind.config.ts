import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Add custom gold colors
        gold: {
          50: "#fefbea",
          100: "#fef6d1",
          200: "#fdeca3",
          300: "#fce076",
          400: "#fbd44a",
          500: "#f9c81d", // Brighter primary gold
          600: "#e6b50e",
          700: "#bf930b",
          800: "#97740a",
          900: "#785c0c",
          950: "#473605",
        },
        // Keep beige colors
        beige: {
          50: "#faf7f2",
          100: "#f5f0e8",
          200: "#ebe2d3",
          300: "#dfd0b9",
          400: "#cbb89c",
          500: "#bca483",
          600: "#a68c6d",
          700: "#8c755a",
          800: "#73614c",
          900: "#5f5141",
          950: "#302920",
        },
        // Add a new elegant color palette for secondary sections
        champagne: {
          50: "#fefdf7",
          100: "#fdf8e9",
          200: "#fbf0d0",
          300: "#f7e2a9",
          400: "#f2ce77",
          500: "#ecb94f",
          600: "#e09e2c",
          700: "#c07d23",
          800: "#9c6422",
          900: "#7f5220",
          950: "#472a10",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
