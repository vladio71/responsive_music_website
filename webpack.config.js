const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {

    entry: "./src/index.js",
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),


    ],
    resolve: {
        modules: [__dirname, "src", "node_modules"],
        extensions: ["mjs", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
        rules: [

            {
                test: /\.mjs|jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-react"
                            ],
                            ["@babel/preset-env", {"modules": false} ]

                        ]
                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"],
            // },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.png|svg|jpg|gif$/,
                use: ["file-loader"],
            },

        ],
    },
};

