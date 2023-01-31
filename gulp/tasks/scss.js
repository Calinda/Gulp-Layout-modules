// Plugins
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer' // add css prefixes
import rename from 'gulp-rename' // files rename
import csso from 'gulp-csso' // files compression
import size from 'gulp-size' // files size
import shorthand from 'gulp-shorthand' // change long style name to short
import groupCssMediaQueries from 'gulp-group-css-media-queries' // group css media queries
import sassGlob from 'gulp-sass-glob' // use masks for css import
import webpCss from 'gulp-webp-css'

const sass = gulpSass(dartSass);

// SCSS processing
export default () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: $.isDev }) // sourcemaps show source files
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'SCSS',
                message: error.message
           }))
        }))
        .pipe(sassGlob())
        .pipe(sass())
        //.pipe(webpCss())
        .pipe(autoprefixer({
                grid: true,
                overrideBrowserslist: ['last 3 versions'],
                cascade: true
            }
        ))
        .pipe(shorthand())  // break the sourcemap
        //.pipe(groupCssMediaQueries()) // break the sourcemap
        .pipe(size({ title: 'Size style.css' }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.isDev }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(csso())
        .pipe(size({ title: 'Size style.min.css' }))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.isDev }))
        .pipe($.plugins.browserSync.stream())
}
