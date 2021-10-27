const Host = require("./config/Host");

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        sec4: `url(${Host}/images/Sec4/bg.svg)`,
      },
      colors: {
        biru: "#1E234C",
        krem: "#FBE5D2",
        merah: "#E62434",
        kuning: "#F8BF0D",
        oren: "#F16224",
        abu: "#5D568C",
        krem2: "#F9CA95",
        oren2: "#F37E48",
        krem3: "#D2AB7E",
      },
      fontFamily: {
        nuku: ["Nuku Nuku", "sans-serif"],
        sansPro: ["Source Sans Pro", "sans-serif"],
      },
      fontSize: {
        oneten: [
          "104px",
          {
            lineHeight: "104px",
          },
        ],
        twoeight: ["28px"],
        threetwo: [
          "32px",
          {
            lineHeight: "32px",
          },
        ],
        forty: [
          "40px",
          {
            lineHeight: "40px",
          },
        ],
        fiftysix: [
          "56px",
          {
            lineHeight: "56px",
          },
        ],
        sixty: [
          "60px",
          {
            lineHeight: "70px",
          },
        ],
        sixtyfour: [
          "64px",
          {
            lineHeight: "64px",
          },
        ],
        sixtyeit: [
          "68px",
          {
            lineHeight: "68px",
          },
        ],
        onefourfour: [
          "144px",
          {
            lineHeight: "144px",
          },
        ],
        xxs: [
          "0.5rem",
          {
            lineHeight: "0.75rem",
          },
        ],
      },
      width: {
        "45c": "45%",
        'box': '13rem',
      },
      boxShadow: {
        csel1: "20px 20px 16px -5px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        "4xl": "2rem",
        "10xl": "5rem",
        "20xl": "10rem",
      },
      scale: {
        0: "0",
        35: ".35",
        40: ".4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
