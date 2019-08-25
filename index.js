require('core-js/stable')
require('regenerator-runtime/runtime')
require("@babel/register")({
  presets: ["@babel/preset-env"]
})

module.exports = require('./app.js')
