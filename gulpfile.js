; "use strict";

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync'),
    cssnano = require('gulp-cssnano');
    // scripts = require('gulp-scripts');

gulp.task('sass', function() {
  return gulp.src('app/sass/*.sass')
  .pipe(sass())
  .pipe(gulp.dest('app'))
});

gulp.task('css-libs', function() {
  return gulp.src('app/css/*.css')
  .pipe(cssnano())
  .pipe(gulp.dest('app/css'));
});

gulp.task('scripts', function() {
    return gulp.src('app/js/*.js')
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('app')); // Выгружаем в папку app/js
});

//
// gulp.task('browser-sync', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     },
//     notify: false
//   });
// });
//
// gulp.task('watch', function() {
//   gulp.watch('app/*.html', browserSync.reload);
//   gulp.watch('app/js/*.js', browserSync.reload);
// })


// gulp.task('mytask', function() {
//   return gulp.src('source-files') //берем файл
//   .pipe(plugin()) //что-то делаем с ним
//   .pipe(gulp.dest('folder')) // выводим результат
// });
