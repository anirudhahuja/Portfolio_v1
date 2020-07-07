import Typography from "typography";


const typography = new Typography({
  baseFontSize: "25px",
  baseLineHeight: 1.45,
  headerFontFamily: ["Montserrat", "serif"],
  bodyFontFamily: ["Roboto Slab", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;