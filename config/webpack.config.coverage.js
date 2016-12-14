const webpackConfig = require("./webpack.config.test");

webpackConfig.ts = {
    compilerOptions: {
        inlineSourceMap: true,
        sourceMap: false
    }
};

webpackConfig.module.postLoaders = [{
    test: /\.ts$/,
    loader: "istanbul-instrumenter-loader",
    exclude: [
        "node_modules",
        /\.spec\.ts$/
    ]
}];

webpackConfig.devtool = "inline-source-map";

module.exports = webpackConfig;
