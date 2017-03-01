var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

var config = {
    entry : {
        index : [
            path.resolve(__dirname, 'src/index.js'),
            //path.resolve(__dirname, 'src/life-cycle.js')
        ]
    },
    output : {
        path : path.resolve(__dirname,'build'),
        filename : "[name].bundle.js?[hash]"
    },
    module : {
        loaders : [
            {
                test : /\.js$/,loader : ['react-hot-loader','babel-loader'],exclude : path.resolve(__dirname, 'node_modules')
            }
        ]
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title : 'react-demos',
            template : './src/index.html'
        })
    ]
};

module.exports = config;