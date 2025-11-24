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
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          "50%" : {transform : 'rotate(45deg)'},
          '100%': { transform: 'rotate(90deg)' },
        }
      },
      colors:{
        discover1: "#222120",
        discover2 : "#2D2C2B",
        discover3: "#BEB0A7",
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
        bgPepo : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842001/bg-pepo_datcct.jpg')",
        bgAct: "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758843002/act-hea_f8tonb.svg')",
        // bgIG1 : "url('/images/instagram1.svg')",
        // bgIG2 : "url('/images/instagram2.svg')",
        // bgIG3 : "url('/images/instagram3.svg')",
        // bgIG4 : "url('/images/instagram4.svg')",
        bgEvent : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842614/ev-header_ne49ks.svg')",
        bgContent : "linear-gradient(to right, #1D2A3B, #1D2A3B 50%), url('/images/content.svg')",
        bgInfluencer : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842070/influencer-header_znryim.svg')",
        // tiktok1 : "url('/images/tiktok1.svg')",
        // tiktok2 : "url('/images/tiktok-2.svg')",
        // tiktok3 : "url('/images/tiktok3.svg')",
        // tiktok4 : "url('/images/tiktok4.svg')",
        // homeMobile : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/v1758841984/home-mobile_abwoqb.svg')",
        homeMobile : "url('/images/home-sm2.jpg')",
        eventMobile : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842594/event-mobile_ouiohi.svg')",
        actorMobile : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842985/actor-mobile_bmkwup.svg')",
        contentMobile : "url('https://res.cloudinary.com/dfptoh5fz/image/upload/q_auto:best/v1758842039/influencer-mobile_rnbnay.svg')"
      }
    },
  },
  plugins: [],
}