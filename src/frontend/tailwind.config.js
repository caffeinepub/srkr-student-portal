/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bricolage Grotesque'", "system-ui", "sans-serif"],
        body: ["'Figtree'", "system-ui", "sans-serif"],
        inter: ["'Figtree'", "system-ui", "sans-serif"],
      },
      colors: {
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "oklch(var(--primary))",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary))",
          foreground: "oklch(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted))",
          foreground: "oklch(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "oklch(var(--accent))",
          foreground: "oklch(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive))",
          foreground: "oklch(var(--destructive-foreground))",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        navy: "oklch(var(--navy))",
        gold: "oklch(var(--gold))",
        cyan: "oklch(var(--cyan))",
        violet: "oklch(var(--violet))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        card: "0 4px 16px oklch(14% 0.05 295 / 0.10)",
        "card-hover": "0 8px 32px oklch(58% 0.24 295 / 0.22), 0 2px 8px oklch(82% 0.17 200 / 0.12)",
        glow: "0 0 24px oklch(58% 0.24 295 / 0.4)",
        "glow-cyan": "0 0 24px oklch(82% 0.17 200 / 0.4)",
        "glow-amber": "0 0 24px oklch(72% 0.19 42 / 0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "gradient-shift": "gradientShift 10s ease infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
