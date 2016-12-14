const parseArgs = require("minimist");
let webpackConfig = require("./webpack.config");

let args = parseArgs(process.argv.slice(2), {
    string: ["env"],
    default: {
        "env": "mocha"
    }
});

webpackConfig.module.postLoaders = [
    {
        test: /\.ts$/,
        loader: "istanbul-instrumenter-loader",
        exclude: [
            "node_modules",
            /\.spec\.ts$/
        ]
    }
];

let reporters = ["mocha", "coverage"];
let browsers = ["PhantomJS"];

if (args.env === "tc") {
    reporters = ["teamcity", "coverage"];
}

if (args.env === "jk") {
    reporters = ["junit", "coverage"];
}

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
        reporters: reporters,
        preprocessors: {
            "src/main.ts": ["webpack"],
            "src/test.ts": ["webpack"]
        },
        webpack: {
            devtool: "inline-source-map",
            resolve: webpackConfig.resolve,
            module: webpackConfig.module,
            externals: webpackConfig.externals,
            ts: {
                compilerOptions: {
                    inlineSourceMap: true,
                    sourceMap: false
                }
            }
        },
        webpackServer: { noInfo: true },
        junitReporter: {
            outputDir: "reports/"
        },
        coverageReporter: {
            reporters: [{
                type: "html",
                dir: "coverage/html-js",
                subdir: "."
            }, {
                type: "json",
                dir: "coverage/json",
                subdir: "."
            }]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: browsers,
        singleRun: true
    });
};
