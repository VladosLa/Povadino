const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlFiles = fs.readdirSync('./src').filter((file) => file.endsWith('.html'));

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
  plugins: [
    ...htmlFiles.map(
      (file) =>
        new HtmlWebpackPlugin({
          filename: file,
          template: `./src/${file}`,
        })
    ),
    new MiniCssExtractPlugin({
      filename: '[name].css', 
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    watchFiles: ['src/**/*.js', 'src/**/*.scss', 'src/**/*.html'],
  },
};
