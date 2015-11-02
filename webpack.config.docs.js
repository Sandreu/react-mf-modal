var path = require('path');
var highlightjs = require('highlight.js');
var webpack = require('webpack');

module.exports = [
  {
    name: "docs",
    entry: './docs/app/index.js',
    output: {
      path: './docs/js/',
      filename: 'app.js',
    },
    babel: {
      stage:0,
      optional: ['runtime'],
      resolveModuleSource: function (source, filename) {
        if (source.match(/^react-mf-modal/)) {
          source = path.relative(path.dirname(filename), source.replace('react-mf-modal',  __dirname + '/src'));
        }
          
        return source;
      },
    },
    markdownLoader: {
      langPrefix: 'hljs ',
      highlight: function (code, lang) {
        return highlightjs.highlightAuto(code, [lang]).value;
      },
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
          warnings: false,
        },
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        }, {
          test: /\.md$/,
          loader: "html!markdown",
        },
      ]
    },
  }
];