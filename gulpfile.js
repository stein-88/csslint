const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')

const checkcss = () => {
    return gulp.src('src/styles/*.css')
        .pipe(cleanCSS())
        .pipe(concat('main.min.css'))
        .pipe(gulp.dest('assets/styles'))
}

exports.checkcss = checkcss
exports.default = checkcss