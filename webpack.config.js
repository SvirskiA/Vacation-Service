const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const PATHS = {
  root: path.resolve(__dirname, "./src/"),
  dir: path.resolve(__dirname, "./src/public"),
};

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";
  return {
    mode: "development",
    entry: {
      // index: PATHS.src,
      entry: "./src/index.js",
    },
    output: {
      filename: "bundle.[fullhash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: '/'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${PATHS.dir}/index.html`,
      }),
      new CopyPlugin({
        patterns: [{ from: path.resolve(PATHS.root, "./public/assets"), to: "./assets" }],
      }),
      new MiniCssExtractPlugin({
        filename: "bundle.[fullhash].css",
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3005,
      historyApiFallback: true,
      hot: true
    },
    resolve: {
      modules: [__dirname, "src", "node_modules"],
      extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
    },
    module: {
      rules: [
        {
          test: /\.js|jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(s*)css$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.(?:ico|gif|svg|png|jpg|jpeg)$/i,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
  };
};
