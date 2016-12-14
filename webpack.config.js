const webpack = require("webpack"),
    helpers = require("./config/helpers");

let config = {
    entry: {
        "ahc-webpack-component": helpers.root("/src/main.ts"),
        "ahc-webpack-component.min": helpers.root("/src/main.ts")
    },
    output: {
        path: helpers.root("/dist/js"),
        filename: "[name].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".ts", ".js"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader" },
            {
                test: /\.html$/,
                loader: "raw-loader",
                exclude: ["./src/index.html"]
            }
        ],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/, minimize: true
        })
    ],
    ts: {
        compilerOptions: {
            declaration: false
        }
    },
    externals: {
        angular: { root: "angular", amd: "angular", commonjs2: "angular", commonjs: "angular" },
        jquery: { root: '$', amd: 'jquery', commonjs: 'jquery', commonjs2: 'jquery' }
    }
};

module.exports = config;
