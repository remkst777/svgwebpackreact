const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.svg/,
        oneOf: [
          {
            resourceQuery: /inline/, // foo.css?inline
            use: {
              loader: "svg-url-loader",
              options: {
                encoding: "base64",
                noquotes: true
              }
            }
          },
          {
            resourceQuery: /external/, // foo.css?external
            use: {
              loader: "svg-inline-loader",
              options: {}
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
