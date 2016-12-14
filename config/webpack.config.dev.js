const webpack = require("webpack"),
    webpackConfig = require("./webpack.config.base"),
    helpers = require("./helpers");

webpackConfig.entry = {
    "ahc-webpack-component": helpers.root("/src/main.ts")
};

webpackConfig.output = {
    path: helpers.root("/dist/js"),
    filename: "[name].js"
};

webpackConfig.devtool = "source-map";

module.exports = webpackConfig;
