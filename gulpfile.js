import gulp from'gulp'

//Paths
import { path } from'./gulp/config/path.js'

// Import plugins
import { plugins } from './gulp/plugins.js'

// Global
global.$ = {
    path: path,
    gulp: gulp,
    plugins: plugins,
    isProd: process.argv.includes('--production'),
    isDev: !process.argv.includes('--production'),
}

// Tasks
import server from'./gulp/tasks/server.js'
import clear from'./gulp/tasks/clear.js'
import html from'./gulp/tasks/html.js'
import scss from'./gulp/tasks/scss.js'
import scss_libs from'./gulp/tasks/scss_libs.js'
import js from'./gulp/tasks/js.js'
import js_libs from'./gulp/tasks/js_libs.js'
import img from'./gulp/tasks/img.js'
import fonts from'./gulp/tasks/fonts.js'


// Watcher
const watcher = () => {
    gulp.watch(path.html.watch, html)
    gulp.watch(path.scss.watch, scss)
    gulp.watch(path.scss_libs.watch, scss_libs)
    gulp.watch(path.js.watch, js)
    gulp.watch(path.js_libs.watch, js_libs),
    gulp.watch(path.img.watch, img)
    gulp.watch(path.fonts.watch, fonts)
}


const mainTasks = gulp.parallel(html, scss, scss_libs, js, js_libs, img, fonts)

const dev = gulp.series(clear, mainTasks, gulp.parallel(watcher, server))
const prod =  gulp.series(clear, mainTasks)


export default $.isProd ? prod : dev