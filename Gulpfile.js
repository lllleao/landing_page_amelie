const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/styles'))

}

function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/scripts'))
}

function images() {
    return gulp.src('./src/imgs/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'))
}

exports.default = gulp.parallel(styles, scripts, images)
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles, scripts))
    gulp.watch('./src/scripts/*.js', gulp.series(styles, scripts))
}