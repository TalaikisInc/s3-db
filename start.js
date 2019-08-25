require('core-js/stable')
require('regenerator-runtime/runtime')
require("@babel/register")({
  presets: ["@babel/preset-env"]
})

require('./index.js')
