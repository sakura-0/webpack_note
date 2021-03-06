const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    output: {
        filename: '[name].[chunkhash:5].js'
    },
    module:{
        rules:[
            {
                test:/\.(png)|(gif)|(jpg)$/, //匹配以png，gif，jpg结尾的文件
                // use: ['file-loader']
                use:['url-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        open: true
    }

}