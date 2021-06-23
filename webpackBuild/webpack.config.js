const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {WebpackManifestPlugin} = require('webpack-manifest-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
// const fs = require('fs')
const CopyWebpackPlugin= require('copy-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

/** generates all pages (views) */
let htmlPageNames = ['blog', 'about', 'contact'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src//html/views/${name}.html`, // relative path to the HTML files
    filename: `${name}.html`, // output HTML files
    minify: false,
    inject: 'body'
  })
});

/** get partials */
let htmlPartials =['navigation'];
let multipleHtmlPartials = htmlPartials.map(name => {
    return new HtmlWebpackPartialsPlugin({
        path: path.join(__dirname, `./src/html/partials/${name}.html`),
        location: `${name}`,
        template_filename: ['index.html', 'about.html', 'blog.html', 'contact.html']
    })
});

const config = {
    entry: ['./src/js/index.js', './src/scss/style.scss'],
    output: {
        filename: 'index.[fullhash].js',
        path: path.resolve(__dirname, 'dist/')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false,
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // new HtmlWebpackPlugin(),
        // new HtmlWebpackPartialsPlugin(сюда объект),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './src/assets/fonts',
                    to: './assets/fonts'
                },
                {
                    from: './src/assets/favicon',
                    to: './assets/favicon'
                },
                {
                    from: './src/assets/img',
                    to: './assets/img'
                },
                {
                    from: './src/assets/uploads',
                    to: './assets/uploads'
                }
            ]
        })
    ].concat(multipleHtmlPlugins).concat(multipleHtmlPartials),
    mode: "development",
    devtool: "eval-cheap-source-map",
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-env', {"useBuiltIns": "usage", "corejs": 3, "targets": "defaults"}], '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.html$/,
                include: path.resolve(__dirname, 'src/html/partials'),
                use: ['raw-loader']
            }
        ]
    }
}

if (currentTask == "build") {
    config.mode = "production"
    config.module.rules[0].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.[fullhash].css'}), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config