// Plugins
import fileInclude from 'gulp-file-include' // HTML layouts
//import webpHtml from 'gulp-webp-html'



// HTML processing
export default () => {
    return $.gulp.src($.path.html.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'HTML',
                message: error.message
           }))
        }))
        .pipe(fileInclude())
        //.pipe(webpHtml())
        .pipe($.gulp.dest($.path.html.dest))
        .pipe($.plugins.browserSync.stream())
}