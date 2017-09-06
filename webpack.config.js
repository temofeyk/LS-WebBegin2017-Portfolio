let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let loaders = require('./webpack.config.loaders')();
let path = require('path');
let pages = [];

function addPage(pages, name, title, clearDist = false) {

    let obj = {
        entry: `./src/${name}.js`,
        output: {
            filename: '[hash].js',
            path: path.resolve(__dirname, 'dist')
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
            new ExtractTextPlugin('[hash].css'),
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            }),
            new HtmlPlugin({
                title: title,
                template: `./${name}.hbs`,
                filename: `${name}.html`,
                chunks: ['main'],
                minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    minifyCSS: true
                },
                favicon: './src/images/icons/favicon.ico'
            })

        ]
    };

    if (clearDist) {
        obj.plugins.push( new CleanWebpackPlugin(['dist']))
    }

    pages.push(obj);

}
addPage(pages, 'index', 'Обо мне', true);
addPage(pages, 'career', 'Карьера');
addPage(pages, 'portfolio', 'Портфолио');
addPage(pages, 'about', 'Обо мне');

module.exports = pages;
