// Plugins
import fonter from'gulp-fonter'
import ttf2woff2 from'gulp-ttf2woff2'


// Fonts processing
export default () => {
    return $.gulp.src($.path.fonts.src) // sourcemaps show source files
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'Fonts',
                message: error.message
           }))
        }))
        .pipe($.plugins.newer($.path.fonts.dest))
        .pipe(fonter({
            formats: ['ttf', 'woff']
        }))
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe(ttf2woff2())
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe($.plugins.browserSync.stream())
}
