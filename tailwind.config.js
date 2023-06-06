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
        "fourth-color": "#5A85F2",
        "html-color": "#F97316",
        "react-color": "#38BDF8",
        "css-color": "#2563EB",
        "sass-color": "#EC4899",
      },
      backgroundImage: {
        headerImg1: "url('/Images/bgHeader.webp')",
        headerImg2: "url('/Images/bgHeader2.webp')",
        headerImg3: "url('/Images/bgHeader3.webp')",
        headerImg4: "url('/Images/bgHeader4.webp')",
        headerImg5: "url('/Images/bgHeader5.webp')",
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
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
