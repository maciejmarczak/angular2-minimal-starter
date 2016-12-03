var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    output: {
        filename: 'app.bundle.js',
        path: './dist'
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader!angular2-template-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                loader: 'raw-loader!sass-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}