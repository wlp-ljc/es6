const webpack = require('webpack');
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = function(env) {
    return {
        devtool: 'cheap-module-source-map',//生成map文件
        context: path.resolve(__dirname, "src"),
        entry: {
        	main: './index',
        },
        output: {
          filename: '[name].js',
          chunkFilename: "[id].[name].js",
          path: path.resolve(__dirname, 'dist'),
          publicPath: '/'
        },
        module:{
          rules: [
            {
              test: /\.js$/,
              use: [{
                loader: "babel-loader",
              }]  
            }           
          ],
        },
        devServer: {
          port: 7777,
          host: 'localhost',
          historyApiFallback: true,
          noInfo: false,
          // stats: 'minimal'
        },
        plugins: [
          new HtmlWebpackPlugin({
            title: '主页',
            template: './index.html',
            filename: 'index.html',
            inject: 'body'
          }),
        ]
    }
}