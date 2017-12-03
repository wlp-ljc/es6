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
              test:  [/\.js$/, /\.jsx$/, /\.es6$/],
              use: [{
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,          
                }
              }]  
            },
            {
              test: /\.css$/,
              use: [
                "style-loader",
                "css-loader"
              ]  
            }              
          ],
        },
        devServer: {
          port: 7777,
          host: '0.0.0.0',
          historyApiFallback: true,
          noInfo: false,
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