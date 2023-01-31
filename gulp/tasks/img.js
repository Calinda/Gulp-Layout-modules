// Plugins
import imagemin from 'gulp-imagemin' // image compression gulp-imagemin@7.1.0
//import webp from 'gulp-webp'


// Images processing
export default () => {
    return $.gulp.src($.path.img.src)
        .pipe($.plugins.plumber({
            errorHandler: $.plugins.notify.onError( error => ({
                title: 'Images',
                message: error.message
           }))
        }))
        .pipe($.plugins.newer($.path.img.dest))
        .pipe($.plugins.gulpIf($.isProd, 
            imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.mozjpeg({quality: 75, progressive: true}),
                imagemin.optipng({optimizationLevel: 3}),
                imagemin.svgo({
                    plugins: [
                        {
                            removeViewBox: false,
                            cleanupIDs: true
                        }
                    ]
                })
            ], {
                verbose: true
            })))   
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.plugins.browserSync.stream())
}