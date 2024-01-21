var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    context: __dirname,
    devServer: {
        static: './dist',
    },
    entry: {
        bundle: ["./src/angular/app.js", "./src/angular/directives/react.directive.js"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                resolve: {
                    extensions: ['.ts', '.js', '.jsx'],
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader" },
                    { loader: "stylus-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.(jpeg|jpg|gif|png)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "images/[name].[ext]",
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    { loader: "html-loader" }
                ]
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: "[name].min.js",
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "./src/angular/index.html",
        }),
    ],
    resolve: {
        alias: {
            '@modules': path.resolve(__dirname, './src/angular/modules'),
            '@main': path.resolve(__dirname, './src/angular'),
            '@react': path.resolve(__dirname, './src/react'),
            '@core': path.resolve(__dirname, './src/angular/core')
        }
    }
};