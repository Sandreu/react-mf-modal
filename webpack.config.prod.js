var path = require('path');
var highlightjs = require('highlight.js');

module.exports = [
  {
    name: "prod",
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
      highlight: function (code) {
        return highlightjs.highlightAuto(code).value;
      },
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
        {
          test: /\.md$/,
          loader: "html!markdown",
        },
      ]
    },
  }
];