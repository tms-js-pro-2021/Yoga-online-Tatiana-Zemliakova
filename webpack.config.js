const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js",
  },
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
},
  devServer: {
    contentBase: path.join(__dirname, "/public"),
    port: 3000,
    watchContentBase: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};