var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("build", function () {
  return gulp.src("./src/**/*")
    .pipe(babel({
      stage: 0,
      optional: ['runtime'],
    }))
    .pipe(gulp.dest("./dist"));
});

gulp.task("package", function () {
  return gulp.src(['./package.json', './README.md', './LICENCE'])
    .pipe(gulp.dest('./dist'));
});

gulp.task("dist", ['build', 'package']);