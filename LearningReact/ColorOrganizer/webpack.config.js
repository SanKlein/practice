var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: "./index-client.js",
    output: {
        path: "assets",
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/,
              loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      "style-loader",
                      "css-loader",
                      {
                          loader: "postcss-loader",
                          options: {
                              plugins: () => [require("autoprefixer")]
                          }
                      }
                  ]
              })
            },
            {
              test: /\.scss/,
              loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      "css-loader",
                      {
                          loader: "postcss-loader",
                          options: {
                              plugins: () => [require("autoprefixer")]
                          }
                      },
                      "sass-loader"
                  ]
              })
            }
        ]
    }
}
