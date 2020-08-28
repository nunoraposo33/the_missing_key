const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')

const isProduction = process.env.npm_lifecycle_event === 'build'

module.exports = {
    entry: './src',
    devtool: !isProduction && 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: isProduction && {
                collapseWhitespace: true
            },
            inlineSource: isProduction && '\.(js)$'
        }),
        new HtmlWebpackInlineSourcePlugin(),

    ],
    devServer: {
        stats: 'minimal',
        overlay: true
    }
}
