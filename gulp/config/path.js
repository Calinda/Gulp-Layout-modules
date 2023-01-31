// Get project folder path
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const srcFolder = './src'
const prodFolder = './dist'

export const path =  {
    rootFolder: rootFolder,
    srcFolder: srcFolder,
    prodFolder: prodFolder,
    html: {
        src: srcFolder + '/*.html',
        watch: srcFolder + '/**/*.html',
        dest: prodFolder
    },

    css: {
        src: srcFolder + '/css/*.css',
        watch: srcFolder + '/css/**/*.css',
        dest: prodFolder + '/css'
    },

    scss: {
        src: [`${srcFolder}/scss/*.{sass,scss}`, `!${srcFolder}/scss/libs.*`],
        watch: [`${srcFolder}/scss/**/*.{sass,scss}`, `!${srcFolder}/scss/libs/**/*.{scss,css,sass}`, `!${srcFolder}/scss/libs.*`],
        dest: prodFolder + '/css'
    },

    scss_libs: {
        src: srcFolder + '/scss/libs.*',
        watch: [`${srcFolder}/scss/libs.*`,`${srcFolder}/scss/libs/**/*.{scss,css,sass}`],
        dest: prodFolder + '/css'
    },

    js: {
        src: [`${srcFolder}/js/*.js`, `!${srcFolder}/js/libs.js`],
        watch: [`${srcFolder}/js/*.js`, `!${srcFolder}/js/libs.js`],
        dest: prodFolder + '/js'
    },

    js_libs: {
        src: srcFolder + '/js/libs/**/*.js',
        watch: srcFolder + '/js/libs/**/*.js',
        dest: prodFolder + '/js'
    },

    img: {
        src: srcFolder + '/images/**/*.{png,jpg,jpeg,gif,svg}',
        watch: srcFolder + '/images/**/*.{png,jpg,jpeg,gif,svg}',
        dest: prodFolder + '/images'
    },

    fonts: {
        src: srcFolder + '/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: srcFolder + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: prodFolder + '/fonts'
    },
}