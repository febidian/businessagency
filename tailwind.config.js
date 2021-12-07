// tailwind.config.js
module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.jsx", "./src/**/**/*.jsx"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      phone: "640px",
      tablet: "768px",
      laptop: "1024px",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        judul: ["Ubuntu", "sans-serif"],
      },
      backgroundImage: {
        retangle1: "url('./image/Rectangle338.png')",
        retangle12: "url('./image/Rectangle339.png')",
        bgblue: "url('./image/Group2057.png')",
      },
      backgroundSize: {
        "100%": "100%",
        "80%": "80%",
        "50%": "60%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
