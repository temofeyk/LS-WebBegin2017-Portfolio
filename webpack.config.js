let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('./webpack.config.loaders')();

loaders.push({
    test: /\.css$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
    })
});

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[hash].js',
        path: './dist'
    },
    devtool: 'source-map',
    module: {
        loaders
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                drop_debugger: false
            }
        }),
        new ExtractTextPlugin('styles.css'),
        new HtmlPlugin({
            title: 'Портфолио',
            template: './index.hbs',
            filename: 'index.html',
            chunks: ['main'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true
            },
            favicon: './src/images/icons/favicon.ico'
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};