const path = require('path'); // lấy đường dẫn tuyệt đối của thư mục

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
    fallback: { crypto: false },
  },
};
module.exports = config;
