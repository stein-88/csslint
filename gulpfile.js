const gulp = require('gulp');
const csscomb = require('gulp-csscomb');

const verCss = () => {
    return gulp.src('src/styles/*.css').pipe(csscomb())
}

exports.verCss = verCss