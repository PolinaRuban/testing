var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'assets'),
    entry: {
        shared: './scripts/shared/module.js',
        testing: './scripts/testing/index.js'
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[file].map'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin( /* chunkName= */ 'vendor', /* filename= */ 'vendor.bundle.js'),
        new ExtractTextPlugin("[name].bundle.css")
    ],
    devtool: 'cheap-module-source-map',
    //devtool: 'source-map',
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    resolve: {
        alias: {
            'jQuery': 'jquery-1.11.2',
            'jquery': 'jQuery',
            'jquery.signalR': 'jquery.signalR-2.1.2'
        },
        modulesDirectories: [
            'assets',
            'Scripts',
            'Scripts/app/utilities',
            'node_modules'
        ]
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'file?name=[path][name]-[hash:8].[ext]'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?.+)?$/,
            loader: 'file?name=[path][name]-[hash:8].[ext]'
        }, {
            test: /jquery-1.11.2/,
            loader: 'expose?jQuery'
        }, {
            test: /jquery-1.11.2/,
            loader: 'expose?$'
        }, {
            test: /angular\.js/,
            loader: 'exports?angular'
        }, {
            test: /angular-route\.js/,
            loader: 'exports?"ngRoute"'
        }, {
            test: /angular-animate\.js/,
            loader: 'exports?"ngAnimate"'
        }, {
            test: /preloadStore\.js/,
            loader: 'exports?PreloadStore'
        }, {
            test: /\.html$/,
            loader: 'ngtemplate?relativeTo=' + __dirname + '!html'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|angular|preloadStore|angular-route|angular-animate|ui-bootstrap-custom|jquery)/,
            loader: 'babel',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015']
            }
        }]
    }
};
