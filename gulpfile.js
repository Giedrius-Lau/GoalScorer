'use strict'

//dependencies

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed');

    //SCSS - css

var SCSS_SRC = './src/Assets/scss/**/*.scss',
    SCSS_DEST = './src/Assets/css';

    //Compile SCSS

gulp.task('compile_scss', function(){

  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(SCSS_DEST));

});

    //Detect changes in SCSS

gulp.task('watch_scss', function () {
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

//Run tasks
gulp.task('default', ['watch_scss']);
