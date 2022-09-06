const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const cleanCss = require('gulp-clean-css');
const autoprefixes = require('gulp-autoprefixer');
const htmlMin = require('gulp-htmlmin');
const imageMin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const del = require('gulp-clean-dir');

const clean = () => {
  return src('dist')
    .pipe(del('dist'))
}

const styles = () => {
  return src('src/css/**/*.css')
    .pipe(sourcemaps.init())
    //.pipe(concat('main.css'))
    .pipe(autoprefixes({
			cascade: false
		}))
    .pipe(cleanCss({level: 2}))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
}

const htmlMinify = () => {
  return src('index.html')
  .pipe(htmlMin({ collapseWhitespace: true }))
  .pipe(dest('dist'))
}

const images = () => {
  return src([
      'src/img/**/*.jpg',
      'src/img/**/*.svg'
    ])
    .pipe(imageMin())
    .pipe(dest('dist/img'))
}

const scripts = () => {
  return src('src/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(babel({
    presets: ['@babel/env']
  }))
  //.pipe(concat('app.js'))
  .pipe(uglify({
    toplevel: true
  }).on('error', notify.onError()))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
}

exports.clean = clean
exports.styles = styles
exports.htmlMinify = htmlMinify
exports.scripts = scripts;
exports.images = images;
exports.default = series(htmlMinify, scripts, styles, images)

