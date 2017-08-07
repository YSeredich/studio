var webpack = require("webpack");

module.exports = {
    entry: './js/main.js',
    output: {
        filename: 'build/build.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]
};