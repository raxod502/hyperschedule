const path = require("path");
const { merge } = require("webpack-merge");

module.exports = merge(require("./webpack.common.js"), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    host: "0.0.0.0",
    contentBase: path.join(__dirname, "dist"),
    port: 5000
  }
});
