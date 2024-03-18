import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        focus: "0 0px 4px rgba(0, 0, 0, 0.25)",
        card: "0 0px 4px rgba(0, 0, 0, 0.20)",
      },
      colors: {
        hover: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
export default config;
