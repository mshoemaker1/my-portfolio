import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#D3C3AC",
        green: "#7D9968",
        lavender: "#9C9AC1",
        bronze: "#BA8745",
        neutral: {
          550: "#545454",
        },
      }
    }
  },
  plugins: [],
};
export default config;
