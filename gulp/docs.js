var gulp = require('gulp');
var gutil = require("gulp-util");
var ghPages = require('gulp-gh-pages');

var express = require('express');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var devConfig = require('../webpack.config.dev');
var prodConfig = require('../webpack.config.prod');

gulp.task('docs:dev', function (cb) {
  var compiler = webpack(devConfig);
  
  var app = new webpackDevServer(compiler, {
    contentBase: '/docs/',
    publicPath: '/js/',
    hot: true,
    historyApiFallback: true,
  });
  
  app.use('/', express.static('docs'));

  app.listen(8080, '0.0.0.0', function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    
    gutil.log('[webpack-dev-server', 'Serving localhost:8080');
  });
});

gulp.task('docs:prod', function (cb) {
  webpack(prodConfig, cb);
})

gulp.task('docs:deploy', ['docs:prod'], function () {
    return gulp.src(['./docs/**/*', '!./docs/app'])
      .pipe(ghPages());
});