// Plugins
import uglify from 'gulp-uglify' // minify files
import concat from 'gulp-concat' // concatenation files

// JavaScript processing
export default () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.isDev }) // sourcemaps show source files
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'JavaScript',
                message: error.message
           }))
        }))
        .pipe($.plugins.gulpIf($.isProd, uglify())) // doesn't need if use webpack
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.isDev }))
        .pipe($.plugins.browserSync.stream())
}
