import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#06080d",
          charcoal: "#0c1017",
          card: "#111622",
          border: "#1e293b",
          "border-glow": "#00f0ff33",
          cyan: "#00f0ff",
          "cyan-dark": "#00b8cc",
          blue: "#3b82f6",
          emerald: "#10b981",
          amber: "#f59e0b",
          rose: "#f43f5e",
          muted: "#8892b0",
          light: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Consolas", "monospace"],
      },
      boxShadow: {
        "cyan-glow": "0 0 25px -5px rgba(0, 240, 255, 0.25)",
        "cyan-glow-lg": "0 0 40px -5px rgba(0, 240, 255, 0.35)",
        "card-glow": "0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 15px -3px rgba(0, 240, 255, 0.1)",
      },
      backgroundImage: {
        "cyber-grid": "radial-gradient(circle, rgba(0, 240, 255, 0.08) 1px, transparent 1px)",
        "dot-grid": "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "hero-gradient": "radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.15) 0%, rgba(6, 8, 13, 0) 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scanline 8s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
