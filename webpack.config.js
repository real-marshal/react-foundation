// To allow using env vars in webpack config

require('dotenv-defaults').config({
  path: './.env',
  defaults: './.env.defaults',
})

const { merge } = require('webpack-merge')

const common = require('./webpack/webpack.common.js')
const dev = require('./webpack/webpack.dev.js')
const prod = require('./webpack/webpack.prod.js')

module.exports = (env, { mode, ...argv }) =>
  merge(common(env, argv), mode === 'development' ? dev(env, argv) : prod(env, argv))
