var webpack = require("webpack");
var path = require("path");
var ExtractTextWepbacp = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    debug: true,
    // entry: {
    //     "app": "./src/index.js"
    // },
    entry: {
        "app": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath:"/dist/"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel",
                query: {
                    presets: ["react", "es2015", "stage-0"],
                    cacheDirectory: true
                },
                exclude: /node_modules/
            },
            // {
            //     test: /.less$/,
            //     loader: ExtractTextPlugin.extract("style", "css!less")
            // },
            {
                test: /.css$/,
                loader: "css"
            }
        ]
    },
    plugins: []
}