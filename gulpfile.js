var gulp = require('gulp');
var watch = require('gulp-watch');
var gulpLess = require('gulp-less');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('less', function() {
	gulp.src('./less/main.less')
		.pipe(plumber())
		.pipe(gulpLess())
		.pipe(autoprefixer({
			browsers: ['> 5%']
		}))
		.pipe(cleanCss())
		.pipe(gulp.dest('./css/'));
});

gulp.task('js', function() {
	gulp.src('./js/main.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./js/build/'));
});

gulp.task('build', function(){
	gulp.start('less');
	gulp.start('js');
});

gulp.task('server', function(){
	return browserSync({
	    port: 9000,
	    server: {
	      baseDir: './'
	    }
	  });
});

gulp.task('watch', function(){
	gulp.watch([
	    './*.html',
	    './js/*.js',
	    './css/*.css'
	  ]).on('change', browserSync.reload);
	watch('./less/*.less', function() {
    	gulp.start('less');
  	});
  	watch('./js/*.js', function() {
    	gulp.start('js');
  	});
});


gulp.task('default', ['build','server', 'watch']);