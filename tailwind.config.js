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
        bricolage: ["var(--font-bricolage-grotesque)", "sans-serif"], // Add this
        inter: ["var(--font-inter)", "sans-serif"], // Add this // Add this
      },
      colors:{
        pryBlack : "#010101",
        blackOne : "#282726",
        pryPablo : "#7E7360",
        secPablo : "#C1B3AB",
        secBlack : "#1A1A1A",
        footerBg : "#211511",
        pryBrown : "#6F483B",
        pryBrown2 : "#302F2E",
        secBrown : "#1E100A",
        pryGrey : "#313131",
        pryGrey2 : "#1F1F1F",
        secGrey : "#ADADAD",
        pryWhite : "#FFFFFF",
        secGrey2 : "#778089",
        secBlue : "#1D2A3B",
        footer : "#25221C",
        brown : "#58392F",
        underline : "#514E49"
      },
      backgroundImage:{
        bgPepo : "url('/images/bg-pepo.jpg')",
        bgIG1 : "url('/images/instagram1.svg')",
        bgIG2 : "url('/images/instagram2.svg')",
        bgIG3 : "url('/images/instagram3.svg')",
        bgIG4 : "url('/images/instagram4.svg')",
        bgEvent : "url('/images/ev-header.svg')",
        bgContent : "linear-gradient(to right, #1D2A3B, #1D2A3B 50%), url('/images/content.svg')",
        tiktok1 : "url('/images/tiktok1.svg')",
        tiktok2 : "url('/images/tiktok-2.svg')",
        tiktok3 : "url('/images/tiktok3.svg')",
        tiktok4 : "url('/images/tiktok4.svg')",
      }
    },
  },
  plugins: [],
}

