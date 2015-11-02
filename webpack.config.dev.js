var base = require('./webpack.config.docs.js');
var extend = require('extend');

module.exports = [
  extend({}, base[0], {
    name: "dev",
    devtool: 'source-map',
    entry: ['./docs/app/index.js', 'webpack-dev-server/client?/'],
    output: {
      path: '/js/',
      filename: 'app.js',
      publicPath: '/js/',
    },
    plugins: [],
  }),
];