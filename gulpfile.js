var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  return gulp.src([
      './src/css/scss/styles.scss',
      'node_modules/highcharts/css/highcharts.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('scripts', function() {
  gulp.src([
  	'node_modules/jquery/dist/jquery.min.js',
  	'node_modules/moment/min/moment.min.js',
    'node_modules/highcharts/highcharts.js',
    'node_modules/highcharts/highcharts-more.js',
    'src/js/theme/theme.js',
  	'src/js/modules/**/*.js'
  	])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./src/js/'))
});

gulp.task('watch', function () {
  gulp.watch('./src/css/scss/**/*.scss', ['sass']);
  gulp.watch('./src/js/modules/**/*.js', ['scripts']);
});
