const webpackConfig = require("./config/webpack.config.test");

module.exports = (config) => {
    config.set({
        basePath: "",
        frameworks: ["jasmine", "source-map-support"],
        files: [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/angular/angular.js",
            "node_modules/angular-mocks/angular-mocks.js",
            "src/main.ts",
            "src/test.ts"
        ],
        preprocessors: {
            "src/main.ts": ["webpack"],
            "src/test.ts": ["webpack"]
        },
        webpack: webpackConfig,
        webpackServer: { noInfo: true },
        reporters: ["mocha"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["PhantomJS"],
        singleRun: true
    });
};
