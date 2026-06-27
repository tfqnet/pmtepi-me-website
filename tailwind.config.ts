import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8F7F4",
        ink: "#16161A",
        mid: "#6B7280",
        rule: "#E5E3DF",
        gold: "#A07840",
        "gold-lt": "#C9A96E",
        builder: "#1A1A2E",
        "builder-mid": "#8892B0",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
