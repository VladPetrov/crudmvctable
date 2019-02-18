const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: "./Scripts/index.ts",
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, "wwwroot/js/scripts/")])
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "wwwroot/js/scripts/"),
        library: 'scripts'
        //sourceMapFilename: '[name].[hash:8].map',
        //chunkFilename: '[id].[hash:8].js'
    }
};