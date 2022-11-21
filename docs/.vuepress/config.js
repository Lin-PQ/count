module.exports = {
  title: "Every day counts",
  description: "先完成",
  base: "/count",
  port: 408,
  themeConfig: {
    nav: [
      { text: "Home", link: "/algorithm/" },
      { text: "JS", link: "/javascript/" },
    ],
    sidebar: {
      "/algorithm/": ["", "data"],
      "/javascript/": [""],
      "/": ["", "二级"],
    },
  },
};
