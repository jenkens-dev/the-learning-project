module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        twitterBlue: "#1da0f2",
        githubGray: "#24292e",
      },
      boxShadow: {
        green: "2px 2px 0 rgba(52, 211, 153)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
