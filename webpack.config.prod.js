var path = require('path');

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
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
        },
      ]
    },
  }
];