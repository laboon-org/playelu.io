const path = require('path');

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
      },
    ],
  },
  resolve: {
    fallback: {
      assert: require.resolve("assert"),
      crypto: require.resolve("crypto-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      os: require.resolve("os-browserify/browser"),
      stream: require.resolve("stream-browserify"),
    },
  },
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  loader: "url-loader?limit=100000",
};
module.exports = config;
