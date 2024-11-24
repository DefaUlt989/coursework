const gulp = require('gulp');
const { src, dest, parallel, series, watch } = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const include = require('gulp-file-include');

let path = {
    build: {
        html: "templates/",
        css: "static/css/",
        js: "static/js/",
        img: "static/images/",
        fonts: "static/fonts/",
        plugins: "static/plugins/",
    },
    src: {
        html: "src/pages/*.html",
        css: "src/resources/scss/styles.scss",
        js: "src/modules/js/**/*.js",
        img: "src/resources/images/**/*",
        fonts: "src/resources/fonts/**/*",
        plugins: "src/modules/plugins/**/*",
    },
    watch: { // Добавлено
        html: "src/pages/**/*.html",
        css: "src/resources/scss/**/*.scss",
        js: "src/modules/js/**/*.js",
        img: "src/resources/images/**/*",
        plugins: "src/modules/plugins/**/*",
    },
};

function html() {
    return src(path.src.html)
        .pipe(include())
        .pipe(dest(path.build.html));
}

function fonts() {
    return src(path.src.fonts)
        .pipe(dest(path.build.fonts));
}

function images() {
    return src(path.src.img)
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { cleanupIDs: false }
                ]
            })
        ]))
        .pipe(dest(path.build.img));
}

function styles() {
    return src([path.src.css])
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
        .pipe(cleancss({ level: { 1: { specialComments: 0 } } }))
        .pipe(dest(path.build.css));
}

function scripts() {
    return src(path.src.js)
        .pipe(uglify())
        .pipe(dest(path.build.js));
}

function plugins() {
    return src(path.src.plugins)
        .pipe(dest(path.build.plugins));
}

function startwatch() {
    watch(path.watch.html, html);
    watch(path.watch.css, styles);
    watch(path.watch.js, scripts);
    watch(path.watch.img, images);
    watch(path.watch.plugins, plugins);
}

exports.html = html;
exports.fonts = fonts;
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.plugins = plugins;
exports.default = series(
    parallel(html, fonts, images, styles, scripts, plugins),
    startwatch
);
