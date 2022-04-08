const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  plugins: [new HtmlWebpackPlugin({
    template: './dist/index.html',
  })],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(tsx|ts)?$/,
        use: {loader: 'babel-loader', options: {presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']}},
      },
      {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
      },
      {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: process.env.NODE_ENV || "development",
  output: { path: path.join(__dirname, "dist"), filename: "index.bundle.js" },
};