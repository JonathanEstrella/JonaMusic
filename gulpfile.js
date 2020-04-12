const { src, dest, watch, series } = require('gulp'),
      pug = require('gulp-pug'),
      scss = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      siteMap = require('gulp-sitemap'),
      cacheBust = require('gulp-cache-bust')

function html() {
  return src('./src/pug/pages/**/*.pug')
  .pipe(pug({
    basedir : './src/pug',
    pretty : true
  }))
  .pipe(dest('./public'))
  .pipe(browserSync.stream())
}

function styles() {
  return src('./src/scss/styles.scss')
  .pipe(scss())
  .pipe(dest('./public/assets/css'))
  .pipe(browserSync.stream())
}

function scripts() {
  return src('./src/js/**/**.js')
  .pipe(dest('./public/assets/js'))
}

function images() {
  return src('./src/images/**/**')
  .pipe(dest('./public/assets/images'))
}

// function map() {
//   return src('./public/**/**.html', {
//     read : false
//   })
//   .pipe(siteMap({
//     siteUrl : 'https://www.jonamusic.com'
//   }))
//   .pipe(dest('./public'))
// }

function serve() {
  browserSync.init({
    server: './public'
  })

  watch('./src/pug/**/**', html)
  watch('./src/scss/**/*.scss', styles)
  watch('./src/js/**/**', scripts)

  watch('./public/**/*.html').on('change',browserSync.reload)
  watch('./public/assets/js/**/*.js').on('change',browserSync.reload)
}

function cache() {
  return src('./public/**/*.html')
  .pipe(cacheBust({
    type : 'timestamp'
  }))
  .pipe(dest('./public'))
}

exports.html = html
exports.css = styles
exports.js = scripts
exports.img = images
// exports.siteMap = map
exports.server = serve
exports.default = series(html, styles, scripts, images, serve)

// function () {
//   return src('./src/')
// }