var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');


gulp.task('sass', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./app/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['sass', 'sass:watch', 'webserver']);
