var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var del = require('del');

var paths = {
    jsx: ['src/kanye-life.jsx']
};

gulp.task('clean', function(done) {
    del(['build'], done);
});

gulp.task('lint', function() {
    return gulp.src(paths.jsx)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
});

gulp.task('build', function() {
    browserify(paths.jsx)
    .transform(reactify)
    .bundle()
    .pipe(source('kanye-life.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
    gulp.watch(paths.jsx, ['lint', 'build']);
});

gulp.task('default', ['build', 'watch']);
