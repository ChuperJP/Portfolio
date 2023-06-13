/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "first-color": "#082570",
        "second-color": "#2A3E70",
        "third-color": "#FAFAFA",
        "fourth-color": "#6590F6",
        "html-color": "#F97316",
        "react-color": "#38BDF8",
        "css-color": "#2563EB",
        "sass-color": "#EC4899",
      },
      fontSize: {
        H1: "48px",
        title: "40px",
        titleS: "32px",
        textL: "24px",
        textM: "16px",
        textS: "12px",
        textXS: "8px",
      },
    },
  },
  plugins: [],
};
