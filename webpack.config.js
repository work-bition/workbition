const path = require('path')

module.exports = {

  entry: './develop/scripts/index.js',

  output: {

    filename: 'bundle.js',

    path: path.resolve(__dirname, 'dist/scripts')

  }

}
