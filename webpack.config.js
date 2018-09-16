const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: `./src/js/index.js`,
    output: {
        filename: 'js/main.js'
    },
    mode: 'development',
    devServer: {
        contentBase: 'dist',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({use: 'css-loader'})
            },
            // {
            //     test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
            //     // 画像をBase64として取り込む
            //     loader: 'url-loader'
            // },
            {
                test: /\.(gif|png|jpg)$/,
                // 画像を別フォルダに生成
                loader: 'file-loader',
                options: {
                    // name: './img/[name].[ext]'
                    name: '[name].[ext]',
                    outputPath : 'img/',
                    publicPath : '../img/'
                }
            },
            {
                test: /\.(eot|wof|woff|woff2|ttf|svg)$/,
                loader: 'file-loader',
                options: {
                    // name: './font/[name].[ext]'
                    name: '[name].[ext]',
                    outputPath : 'font/',
                    publicPath : '../font/'
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css'),
    ],
};
