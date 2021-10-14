'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
};
exports.buildStyles = buildStyles;

exports.watch = function () {
  gulp.watch('.src/sass/**/*.scss', ['sass']);
};

exports.default = function() {
  return src('src/js/*.js').pipe(dest('js/main.js'));
}