const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// sass task
function scssTask() {
    return src('src/sass/styles.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
    return src('src/js/main.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Task
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    })
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task 
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['src/sass/**/*.scss', 'src/js/**/*.js'], series( scssTask, jsTask, browsersyncReload ))
}

// Default Gulp task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);

