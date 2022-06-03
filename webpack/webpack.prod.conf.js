
const { resolvePath,baseConfig } = require('./webpack.base.conf');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseConfig,{
    mode:'production',
    optimization:{
        minimizer:[
            new MiniCssExtractPlugin()
        ]
    }
})