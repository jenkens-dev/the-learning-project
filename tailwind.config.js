module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        twitterBlue: "#1da0f2",
        githubGray: "#24292e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
