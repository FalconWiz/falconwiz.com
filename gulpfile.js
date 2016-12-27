'use strict'

const gulp = require('gulp')
const webpackStream = require('webpack-stream')
const browserSync = require('browser-sync')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const sass = require('gulp-sass')

const webpack_loaders = [
  {
    test: /\.(jsx|js)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query: { presets: (['es2015', 'stage-0', 'react']) }
  },
  {
    test: /\.(json)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'json'
  }
]

const EXIT_ON_ERRORS = process.env.EXIT_ON_ERRORS || false

const clientSync = browserSync.create()

const handleErrors = function (err) {
  gutil.log(err)
  this.emit('end')
}

// Lint
function lint () {
  const stream = gulp.src(['./src/**/*.js', 'gulpfile.js'])
  .pipe(eslint()).pipe(eslint.format())
  if (EXIT_ON_ERRORS) stream.pipe(eslint.failAfterError())
  else stream.on('error', handleErrors)
  return stream
}

// Client webpack
function clientWebpack () {
  return gulp.src('./src/client/index.jsx')
    .pipe(webpackStream({
      devtool: 'source-map',
      output: {
        filename: './dist/client/index.js'
      },
      module: {
        loaders: webpack_loaders
      }
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest('.'))
    .pipe(clientSync.stream())
}

// Client html
function clientHtml () {
  return gulp.src('./src/client/index.html')
    .pipe(gulp.dest('./dist/client/'))
    .pipe(clientSync.stream())
}
// Client Sass
function clientSass () {
  return gulp.src('./src/client/**/*.scss')
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(gulp.dest('./dist/client/'))
    .pipe(clientSync.stream())
}

// Client Assets
function clientAssets () {
  return gulp.src('./src/client/assets/**/*')
    .pipe(gulp.dest('./dist/client/'))
    .pipe(clientSync.stream())
}

// Client Favicon
function clientFavicon () {
  return gulp.src('./src/client/favicon.ico')
    .pipe(gulp.dest('./dist/client/'))
    .pipe(clientSync.stream())
}

// Tasks
const all_tasks = gulp.parallel([
  lint, clientWebpack, clientHtml, clientSass, clientFavicon, clientAssets
])

gulp.task('default', all_tasks)
gulp.task('lint', lint)
gulp.task('clientWebpack', clientWebpack)

gulp.task('watch', gulp.series(all_tasks, () => {
  clientSync.init({
    server: {
      baseDir: './dist/client',
      port: 3000,
      uiPort: 3001
    }
  })
  gulp.watch('./src/client/**/*.jsx', gulp.series([clientWebpack]))
  gulp.watch('./src/client/index.html', gulp.series([clientHtml]))
  gulp.watch('./src/client/**/*.scss', gulp.series([clientSass]))
}))

gulp.task('build', gulp.series(all_tasks))
