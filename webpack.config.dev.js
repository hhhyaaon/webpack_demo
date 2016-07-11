var webpack = require("webpack");
var webpackBase = require("./webpack.config.base.js");


var cfg = Object.assign(webpackBase, {
    devtool: "cheap-module-source-map"
});

//entry
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    cfg.entry[name] = []
        .concat("webpack-hot-middleware/client.js")
        .concat(webpackBase.entry[name])
});

//plugins
cfg.plugins = (webpackBase.plugins || []).concat(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
)

module.exports = cfg;

