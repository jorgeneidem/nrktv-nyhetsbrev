var gulp = require('gulp');
var gutil = require('gulp-util');

var nunjucksRender = require('gulp-nunjucks-render');

gulp.task('nunjucks', function() {
    return gulp.src('src/emails/*.nunjucks')
        .pipe(
            nunjucksRender({
                path: ['src/templates/']
            })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('build/'));
});

var inlineCss = require('gulp-inline-css');

gulp.task('inlinecss', function() {
    return gulp.src('build/*.html')
        .pipe(
            inlineCss({
                applyStyleTags: true,
                removeStyleTags: false
            })
            .on('error', gutil.log)
        )
        .pipe(gulp.dest('build/'));
});

var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        port: 8000,
        root: 'build', 
        livereload:true
    });
});

var filesToWatch = [
    'src/emails/*.nunjucks',
    'src/templates/**/*.nunjucks'
]

gulp.task('watch', function() {
    gulp.watch(filesToWatch,['nunjucks']); 
});

gulp.task('default', ['connect', 'nunjucks', 'inlinecss', 'watch']);