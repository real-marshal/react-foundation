const path = require('node:path')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DotEnv = require('dotenv-webpack')
const { merge } = require('webpack-merge')

const dev = require('./webpack.dev.js')
const prod = require('./webpack.prod.js')

const common = () => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    plugins: [new TSConfigPathsPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Foundation',
      favicon: './src/assets/favicon.ico',
      meta: { viewport: 'width=device-width, initial-scale=1.0' },
      templateContent: `
        <!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
          </body>
        </html>
        `,
    }),
    new DotEnv(),
  ],
  module: {
    rules: [
      {
        test: /\.(?:png|jpe?g|svg)$/,
        type: 'asset',
      },
      {
        test: /\.(?:txt|md)/,
        type: 'asset/source',
      },
    ],
  },
  cache: {
    // Can also be configured for CI/CD if needed
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.cache/webpack'),
    buildDependencies: {
      config: [__filename],
    },
  },
})

module.exports = (env, { mode, ...argv }) =>
  merge(common(env, argv), mode === 'development' ? dev(env, argv) : prod(env, argv))
