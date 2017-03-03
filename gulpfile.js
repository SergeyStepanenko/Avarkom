; "use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano'),
    importCss = require('gulp-import-css'),
    gulpCopy = require('gulp-copy');

// gulp.task('copy', function () {
//   gulp.src('app/index.html')
//     .pipe(gulp.dest(''))
// });

gulp.task('css-import-nano', function () {
  gulp.src('css/avarkom.css')
    .pipe(importCss())
    .pipe(cssnano())
    .pipe(gulp.dest(''))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest(''))
});

gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('')) // Выгружаем в папку app/js
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
    notify: true
  });
});

gulp.task('watch', ['browser-sync', 'css-import-nano', 'scripts'], function() {
  gulp.watch('css/*.css', ['css-import-nano'])
  gulp.watch('*.html', browserSync.reload)
  gulp.watch('js/*.js', ['scripts'])
});
