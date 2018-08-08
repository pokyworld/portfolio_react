const fs = require('fs');
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const publicUrl = (mode !== "production") ? "/" : "https://pokyworld.github.io/portfolio_react";
const publicUrl = (webpack.mode !== "production") ? "/" : "https://pokyworld.github.io/portfolio_react";

module.exports = (env = {}) => {
    return {
        entry: ["./src/index.js","./src/scss/main.scss"],
        mode: "development",
        output: {
            path: path.join(__dirname, "public"),
            filename: "dist/app.bundle.js"
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/
                },
                { // regular css files
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader?importLoaders=1"
                    ]
                },
                { // sass / scss loader for webpack
                    test: /\.(sass|scss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader?importLoaders=1",
                        "sass-loader"
                    ]
                },
                { 
                    test: /config\.json$/, 
                    loader: 'json-loader' 
                },
                {
                    test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: path.join(__dirname, "/public/fonts/")    // where the fonts will go
                        }
                    }]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "dist/app.css"
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                  'PUBLIC_URL': `"${publicUrl}"`
                }
            })
        ],
        devtool: "eval",
        devServer: {
            https: true,
            cert: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.crt'),
            key: fs.readFileSync('/Users/desb/Projects/ssl/localhost/ia.localhost.key'),
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            compress: true,
            port: 8443
        }
    }
};