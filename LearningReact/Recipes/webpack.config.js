var webpack = require("webpack");

module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
      path: __dirname + "/dist/assets",
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loaders: ['babel-loader?' +
                'babelrc=false,' +
                'presets[]=env,' +
                'presets[]=stage-0,' +
                'presets[]=react'
              ]
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader', {
                loader: 'postcss-loader',
                options: {
                plugins: () => [require('autoprefixer')]
              }}]
           }
      ]
  },
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          warnings: false,
          mangle: true
      })
  ]
}
