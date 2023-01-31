export default () => {
    $.plugins.browserSync.init({
        server: {
            baseDir: $.path.prodFolder
        },
        notify: false,
        port: 3000
    })
}