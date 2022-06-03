const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const resolvePath = _path => path.resolve(__dirname,_path);
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const baseConfig = {    
    entry: resolvePath('../src/index.jsx'),
    output:{
        path: resolvePath('../dist'),
        filename: '[name].bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
            },
            {
                test:/\.less$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','less-loader']
            },
            {
                test:/\.jsx$/,
                use: 'babel-loader'
            },
            {
                test:/\.svg$/,
                use: 'assets/resource'
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: resolvePath('../public/index.html'),
            filename:'index.html',
            title:'我的音乐'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css'
        })
    ]
}

module.exports = {
    resolvePath,
    baseConfig
}