const webpackConfig = require("./webpack.config.dev");

webpackConfig.entry = {};
webpackConfig.output = {};
webpackConfig.devtool = null;

module.exports = webpackConfig;
