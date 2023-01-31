// Plugins
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename' // files rename
import csso from 'gulp-csso' // files compression
import cssGlob from 'gulp-css-glob' // use masks for css import
import cssImport from 'gulp-cssimport' // change import to content

const sass = gulpSass(dartSass);

// SCSS processing
export default () => {
    return $.gulp.src($.path.scss_libs.src, { sourcemaps: $.isDev }) // sourcemaps show source files
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'Libs',
                message: error.message
           }))
        }))
        .pipe(cssGlob({
            extensions: ['.css', '.scss'],
        }))
        .pipe(cssImport({
            matchPattern: '*.{css, *.scss}'
        }))
        .pipe(sass())
        .pipe($.gulp.dest($.path.scss_libs.dest, { sourcemaps: $.isDev }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe($.gulp.dest($.path.scss_libs.dest, { sourcemaps: $.isDev }))
        .pipe($.plugins.browserSync.stream())
}
