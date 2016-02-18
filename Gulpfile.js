	// Gulp
	var gulp = require('gulp');

	// Sass/CSS stuff
	var sass = require('gulp-sass');
	var prefix = require('gulp-autoprefixer');
	var minifycss = require('gulp-minify-css');

	// Images
	var svgmin = require('gulp-svgmin');
	var imagemin = require('gulp-imagemin');

	// Stats and Things
	var size = require('gulp-size');

//

	// compile all your Sass
		gulp.task('sass', function (){
			gulp.src(['./src/scss/*.scss'])
				.pipe(sass({
					includePaths: ['./src/scss'],
					outputStyle: 'expanded'
				}))
				.pipe(prefix(
					"last 1 version", "> 1%", "ie 8", "ie 7"
					))
				.pipe(gulp.dest('./src/css'))
				.pipe(minifycss())
				.pipe(gulp.dest('./build/css'));
		});


	// Images
		// gulp.task('svgmin', function() {
		// 	gulp.src('./src/img/svg/*.svg')
		// 	.pipe(svgmin())
		// 	.pipe(gulp.dest('./src/img/svg'))
		// 	.pipe(gulp.dest('./build/img/svg'));
		// });

		gulp.task('imagemin', function () {
			gulp.src('./src/img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest('./src/img'))
			.pipe(gulp.dest('./build/img'));
		});

	// Stats and Things
		gulp.task('stats', function () {
			gulp.src('./build/**/*')
			.pipe(size())
			.pipe(gulp.dest('./build'));
		});

//

	gulp.task('default', function(){

		gulp.watch("./src/scss/**/*.scss", function(event){
			gulp.run('sass');
		});

		gulp.watch("./src/img/**/*", function(event){
			gulp.run('imagemin');
			//gulp.run('svgmin');
		});
	});