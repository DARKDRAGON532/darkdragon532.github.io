const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/main.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DARKDRAGON532',
      template: "./src/index.html",
      hash: true,
      filename: "index.html",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "docs"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["extract-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource"
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ],
  },
};
