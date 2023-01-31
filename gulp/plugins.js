//import replace from 'gulp-replace' // search and replace
import plumber from 'gulp-plumber' // error handler
import notify from 'gulp-notify' // messages (tips)
import browserSync from 'browser-sync' // locacl server
import newer from 'gulp-newer' // check updates
import gulpIf from 'gulp-if' // condition

export const plugins = {
    //replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    gulpIf: gulpIf
}