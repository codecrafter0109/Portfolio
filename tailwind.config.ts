import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0A0A0F",
          card: "#111118",
          panel: "#16161F",
          input: "#1C1C26",
          hover: "#1A1A24",
        },
        accent: {
          DEFAULT: "#22D3EE",
          hover: "#06B6D4",
          soft: "#67E8F9",
          dim: "rgba(34, 211, 238, 0.12)",
        },
        muted: "#7A7A8A",
        line: "rgba(255, 255, 255, 0.06)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(34, 211, 238, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
