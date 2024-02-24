const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')

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

exports.default = gulp.parallel(styles, scripts)
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles, scripts))
    gulp.watch('./src/scripts/*.js', gulp.parallel(styles, scripts))
}