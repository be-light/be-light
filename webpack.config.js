const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [{
    entry: "./src/server.ts",
    target: "node",
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [{
        test: /\.ts?$/,
        use: ["ts-loader"]
      }]
    },
    node: {
      __dirname: true
    },
    externals: [nodeExternals()]
  },
  {
    entry: "./public/ts/main.ts",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "public_dist")
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [{
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader"
            },
            "sass-loader"
          ]
        },
        {
          test: /\.ts?$/,
          use: "ts-loader"
        },
        {
          test: /\.(png|jpg)$/,
          loader: 'url-loader'
        }
      ]
    },
    plugins: [new MiniCssExtractPlugin({
      filename: "app.css"
    })]
  }
];