const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {

  entry: "./src/client/index.js",
  output: {
    libraryTarget: "var",
    library: "Client",
    publicPath: "/",
  },
  mode: "development",
  // https://webpack.js.org/configuration/dev-server/#devserverproxy
  // devServer: {
  //   proxy: {
  //     "/analyze-sentiment": "http://localhost:8081",
  //   },
  // },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: "/.js$/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
    new Dotenv(),
    new CleanWebpackPlugin({
      // Simulate the removal of files
      dry: false,
      // Write Logs to Console
      verbose: true,
      // Automatically remove all unused webpack assets on rebuild
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
};
