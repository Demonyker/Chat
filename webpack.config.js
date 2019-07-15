const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const conf = {
  entry: './source/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'main.js',
    publicPath: './build',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|gif|jpg|png|svg|woff|ttf|wav|mp3)$/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};

module.exports = () => conf;
