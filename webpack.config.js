const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: '/',
        filename: 'main.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'img/[name].[ext]'
                    } 
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        })
    ]
};