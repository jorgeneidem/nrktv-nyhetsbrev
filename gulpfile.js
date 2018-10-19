var gulp = require('gulp');
var gutil = require('gulp-util');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();

// Static Server + watching html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("build/*.html").on('change', browserSync.reload);
});

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

var filesToWatch = [
    'src/emails/*.nunjucks',
    'src/templates/**/*.nunjucks'
]

gulp.task('watch', function(done) {
    gulp.watch(filesToWatch, gulp.series('nunjucks'));
    console.log("Watching files...");
    done();
});

gulp.task('default', gulp.series('nunjucks','watch','serve'))