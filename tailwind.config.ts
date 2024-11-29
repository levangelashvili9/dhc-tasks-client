import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E8F1FD",
        primary: "#6A6CE0",
        secondary: "#F6FAFF",
        tertiary: "#D8D8D8",
        quaternary: "#372F2F",
        destructive: "#F48686",
        success: "#3DCB6599",
        "primary-foreground": "#30507D",
        "secondary-foreground": "#545871",
        "tertiary-foreground": "#6C86A8",
        placeholder: "#B0B0B0",
        shadow: "#6A6CE026",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
