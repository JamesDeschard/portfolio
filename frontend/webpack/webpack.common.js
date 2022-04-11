const Path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: {
    app: require('glob').sync("./src/**/*.js"), 
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
    publicPath: '/static/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },  
  },
  plugins: [
    new SpriteLoaderPlugin(),
    new CleanWebpackPlugin({dangerouslyAllowCleanPatternsOutsideProject: true}),
    new CopyWebpackPlugin({ patterns: [{ from: Path.resolve(__dirname, '../public'), to: 'public' }] }),
    new HtmlWebpackPlugin({
      template: Path.resolve(__dirname, '../src/index.ejs'),
      filename: Path.resolve(__dirname, '../../main/templates/base_templates/frontend-base.html'),
      inject:false,
    }),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        type: "asset/resource",
      },
      {
        test: /.*\.svg$/,
        use: [{
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              publicPath: 'icons/',
              spriteFilename: (svgPath) => `sprite${svgPath.substr(-4)}`,
              symbolId: (filePath) => `icon-${Path.basename(filePath).slice(0, -4)}`,
            },
          },
          {
            loader: 'svgo-loader',
          },
        ],
      }
    ],
  },
};