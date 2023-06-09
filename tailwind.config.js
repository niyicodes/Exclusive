/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  screens: {
   xs: "240px", /* mobile vertical*/
   sm: "568px", /* mobile horizontal*/
   md: "768px", /* tablets vertical*/
   lg: "1024px", /* mobile horizontal*/
   xl: "1280px", /* very large screens*/
  },
  extend: {
   fontFamily: {
    inter: ["var(--font-inter)"],
    poppins: ["var(--font-poppins)"],
   },
   colors: {
    valencia: {
     50: "#fdf3f3",
     100: "#fbe5e5",
     200: "#f9cfcf",
     300: "#f3aeae",
     400: "#eb7e7e",
     500: "#db4444",
     600: "#ca3838",
     700: "#aa2b2b",
     800: "#8d2727",
     900: "#752727",
     950: "#3f1010",
    },
    "ocean-green": {
     50: "#effaf4",
     100: "#d8f3e3",
     200: "#b3e7cc",
     300: "#82d3ae",
     400: "#47b486",
     500: "#2b9e71",
     600: "#1d7e5a",
     700: "#17654b",
     800: "#14513d",
     900: "#124232",
     950: "#09251c",
    },
    sunglo: {
     50: "#fcf4f4",
     100: "#fae6e6",
     200: "#f6d2d2",
     300: "#efb2b2",
     400: "#e07575",
     500: "#d55e5e",
     600: "#c14141",
     700: "#a13434",
     800: "#862e2e",
     900: "#702c2c",
     950: "#3c1313",
    },
    "regent-st-blue": {
     50: "#f3f6fb",
     100: "#e3eaf6",
     200: "#cedcef",
     300: "#a0bce0",
     400: "#84a6d6",
     500: "#678aca",
     600: "#5470bc",
     700: "#4960ac",
     800: "#404f8d",
     900: "#384470",
     950: "#252c46",
    },
    "rolling-stone": {
     50: "#f5f6f6",
     100: "#e6e7e7",
     200: "#cfd1d2",
     300: "#aeb1b2",
     400: "#7d8184",
     500: "#6a6d70",
     600: "#5a5d60",
     700: "#4d4f51",
     800: "#434547",
     900: "#3b3c3e",
     950: "#252527",
    },
    'wild-sand': {
      '50': '#f5f5f5',
      '100': '#f0f0f0',
      '200': '#e4e4e4',
      '300': '#d1d1d1',
      '400': '#b4b4b4',
      '500': '#9a9a9a',
      '600': '#818181',
      '700': '#6a6a6a',
      '800': '#5a5a5a',
      '900': '#4e4e4e',
      '950': '#282828',
  },
  
   },
  },
 },
 plugins: [],
};
