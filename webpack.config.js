const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
  {
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
      rules: [{ test: /\.ts?$/, use: ["ts-loader"] }]
    },
    externals: [nodeExternals()]
  }
];
