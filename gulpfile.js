
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');

gulp.task('imagemin', () =>
	gulp.src('src/assets/images/**/*')
		.pipe(imagemin([
			imagemin.gifsicle({ interlaced: true }),
			imageminMozjpeg({ quality: 80, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		]))
		.pipe(gulp.dest('src/assets/images'))
);
