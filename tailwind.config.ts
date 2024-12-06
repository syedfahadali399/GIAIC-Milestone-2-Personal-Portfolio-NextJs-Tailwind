import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      "max-2xl": {max: "1536px"},
      "max-xl": {max: "1280px"},
      "max-lg": {max: "1024px"},
      "max-sg": {max: "896px"},
      "max-md": {max: "768px"},
      "max-sm": {max: "642px"},
      "max-lm": {max: "480px"},
      "max-mm": {max: "420px"},
      "max-usm": {max: "360px"}
    },
  },
  plugins: [],
} satisfies Config;
