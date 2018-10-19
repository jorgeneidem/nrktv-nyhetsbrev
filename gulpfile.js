var gulp = require('gulp');
var gutil = require('gulp-util');
var nunjucksRender = require('gulp-nunjucks-render');
var browserSync = require('browser-sync').create();
var inlineCss = require('gulp-inline-css');

// Static Server + watching html files
gulp.task('serve', function(done) {
    browserSync.init({
        server: "./build"
    });
    done();
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

gulp.task('reload', function(done){
    browserSync.reload();
    done();
});

gulp.task('watch', function() {
    
    var watcher = gulp.watch(filesToWatch, gulp.series('nunjucks', 'reload'));
    watcher.on('change', function(path) {
        console.log('File' + path + ' was changed, nunjucking...');
    });


});

gulp.task('default', gulp.series('serve','watch'));