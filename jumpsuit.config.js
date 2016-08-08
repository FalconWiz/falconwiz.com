var fs = require('fs')
var path = require('path')
var sass = require('node-sass')

var sassEntry = path.resolve('src/app.scss')

module.exports = {
  sourceDir: 'src',
  outputDir: 'dist',
  assetsDir: 'assets',

  entry: 'app.js',

  prodSourceMaps: true,

  hsr: {
    maxAge: 1000,
    shouldCatchErrors: true
  },

  server: {
    host: 'localhost',
    port: 8000
  },

  browserify: {
    extensions: ['.js'],
    rebundles: [],
    transforms: [],
    globals: []
  },

  styles: {
    extensions: ['.css', '.scss'],
    action: buildStyles
  }
}

function buildStyles() {
  return new Promise((resolve, reject) => {
    sass.render({
      file: sassEntry,
      outputStyle: 'compressed',
      outFile: 'app.css'
    }, function (err, res) {
      if (err) {
        console.log('Error: ', err)
        return reject(err)
      }
      fs.writeFile('app.css', res.css, function(err) {
        console.log('it worked!')
        resolve(res.css.toString())
      })
    })
  })
}
