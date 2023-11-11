import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        surfaceTeal: "#E4EEEF",
        primary: "#168891",
        surfaceAmber: "#F4C657",
        surfacegray: "#F2F2F2",
        text: "#4C4C4C",
        border: "#E6E6E6",
        inputSurface: "#FAFAFA",
        subtitle: "#B3B3B3",
      },
    },
  },
  plugins: [],
};
export default config;
