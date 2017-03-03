; "use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    importCss = require('gulp-import-css');

gulp.task('css-import-nano', function () {
  gulp.src('app/css/avarkom.css')
    .pipe(importCss())
    .pipe(cssnano())
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('app'))
});

gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('app')) // Выгружаем в папку app/js
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: true
  });
});

gulp.task('watch', ['browser-sync', 'css-import-nano', 'scripts'], function() {
  gulp.watch('app/css/*.css', ['css-import-nano'])
  gulp.watch('app/*.html', browserSync.reload)
  gulp.watch('app/js/*.js', ['scripts'])
});
