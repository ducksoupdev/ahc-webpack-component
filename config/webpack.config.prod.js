const webpack = require("webpack"),
    webpackConfig = require("./webpack.config.dev"),
    helpers = require("./helpers");

webpackConfig.entry["ahc-webpack-component.min"] = helpers.root("/src/main.ts");
webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
    })
);

module.exports = webpackConfig;
