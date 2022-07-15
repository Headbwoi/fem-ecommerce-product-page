/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1115px",
    },
    colors: {
      Orange: "hsl(26, 100%, 55%)",
      PaleOrange: "hsl(25, 100%, 94%)",
      VeryDarkBlue: "hsl(220, 13%, 13%)",
      DarkGrayishBlue: "hsl(219, 9%, 45%)",
      GrayishBlue: "hsl(220, 14%, 75%)",
      LightGrayishBlue: "hsl(223, 64%, 98%)",
      White: "hsl(0, 0%, 100%)",
      lightboxBackground: "hsl(0, 0%, 0%)",
    },
    fontFamily: {
      sans: ["'Kumbh Sans', 'sanserif'"],
    },
    extend: {},
  },
  plugins: [],
}
