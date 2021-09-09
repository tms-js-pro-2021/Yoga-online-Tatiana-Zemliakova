/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
      watch: true,
    },
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, Sassnpm install eslint --save-dev
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
