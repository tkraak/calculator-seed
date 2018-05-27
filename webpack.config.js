const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(PATHS.app, 'index.html')
      }),
      new PrettierPlugin({
        printWidth: 68,
        singleQuote: true,
        trailingComma: 'es5',
        extensions: ['.js', '.ts'],
      }),
    ],
  },
  parts.loadCSS(),
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([]);

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

