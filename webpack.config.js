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

module.exports = [{
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
            environment: {indexSelected: true},
            title: 'Обо мне',
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
},{
    entry: './src/career.js',
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
        new ExtractTextPlugin('career.css'),
        new HtmlPlugin({
            title: 'Карьера',
            template: './career.hbs',
            filename: 'career.html',
            chunks: ['main'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true
            },
            favicon: './src/images/icons/favicon.ico'
        })

    ]
},{
    entry: './src/portfolio.js',
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
        new ExtractTextPlugin('portfolio.css'),
        new HtmlPlugin({
            title: 'Портфолио',
            template: './portfolio.hbs',
            filename: 'portfolio.html',
            chunks: ['main'],
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true
            },
            favicon: './src/images/icons/favicon.ico'
        })

    ]
}];