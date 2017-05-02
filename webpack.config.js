let webpack = require('webpack');
let HtmlPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
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
            new ExtractTextPlugin(`${name}_[hash].css`),
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
addPage(pages, 'portfolio', 'Портфолио', true);
addPage(pages, 'about', 'Обо мне', true);

module.exports = pages;

//
// module.exports = [{
//     entry: './src/index.js',
//     output: {
//         filename: '[hash].js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     module: {
//         loaders
//     },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 drop_debugger: false
//             }
//         }),
//         new ExtractTextPlugin('index_[hash].css'),
//         new HtmlPlugin({
//             title: 'Обо мне',
//             template: './index.hbs',
//             filename: 'index.html',
//             chunks: ['main'],
//             minify: {
//                 collapseWhitespace: true,
//                 removeComments: true,
//                 minifyCSS: true
//             },
//             favicon: './src/images/icons/favicon.ico'
//         }),
//         new CleanWebpackPlugin(['dist'])
//     ]
// },{
//     entry: './src/career.js',
//     output: {
//         filename: '[hash].js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     module: {
//         loaders
//     },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 drop_debugger: false
//             }
//         }),
//         new ExtractTextPlugin('career_[hash].css'),
//         new HtmlPlugin({
//             title: 'Карьера',
//             template: './career.hbs',
//             filename: 'career.html',
//             chunks: ['main'],
//             minify: {
//                 collapseWhitespace: true,
//                 removeComments: true,
//                 minifyCSS: true
//             },
//             favicon: './src/images/icons/favicon.ico'
//         })
//
//     ]
// },{
//     entry: './src/portfolio.js',
//     output: {
//         filename: '[hash].js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     devtool: 'source-map',
//     module: {
//         loaders
//     },
//     plugins: [
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 drop_debugger: false
//             }
//         }),
//         new ExtractTextPlugin('portfolio_[hash].css'),
//         new HtmlPlugin({
//             title: 'Портфолио',
//             template: './portfolio.hbs',
//             filename: 'portfolio.html',
//             chunks: ['main'],
//             minify: {
//                 collapseWhitespace: true,
//                 removeComments: true,
//                 minifyCSS: true
//             },
//             favicon: './src/images/icons/favicon.ico'
//         })
//
//     ]
// }];