const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new PrettierPlugin({
      printWidth: 68,
      singleQuote: true,
      trailingComma: 'es5',
    }),
  ],
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST, // defaults to `localhost`
    port: process.env.PORT, // defaults to 8080
    open: false,
    overlay: true,
  },
};
