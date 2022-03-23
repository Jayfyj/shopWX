//生产环境去掉所有console.log
var prodPlugins = [];
if (process.env.VUE_APP_CURRENTENV === "production") {
  prodPlugins.push("transform-remove-console");
}

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: (name) => `${name}/style/less`,
      },
      "vant",
    ],
    ...prodPlugins,
  ],
};
