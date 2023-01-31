// Plugins
import uglify from 'gulp-uglify' // minify files
import concat from 'gulp-concat' // concatenation files
import order from 'gulp-order' // concatenation files

// JavaScript processing
export default () => {
    return $.gulp.src($.path.js_libs.src, { sourcemaps: $.isDev }) // sourcemaps show source files
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'JavaScript',
                message: error.message
           }))
        }))
        .pipe(order([
            'libs/juqery-3.6.3.js',
            'libs/**/*.js',
        ]))
        .pipe(concat('libs.js'))
        .pipe(uglify()) // doesn't need if use webpack
        .pipe($.gulp.dest($.path.js_libs.dest, { sourcemaps: $.isDev }))
        .pipe($.plugins.browserSync.stream())
}
