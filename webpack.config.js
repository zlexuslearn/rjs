const    webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  }
};

module.exports = config;