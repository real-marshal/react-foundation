const path = require('node:path')

const common = require('./webpack/webpack.common.js')()

// Looks a bit convoluted but I think that's fine for now
module.exports = (storybookConfig, mode) => ({
  ...storybookConfig,
  resolve: {
    ...storybookConfig.resolve,
    plugins: common.resolve.plugins,
  },
  module: {
    rules: [
      ...common.module.rules,
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: {
            envName: mode === 'development' ? 'storybookDev' : 'production',
            // Shouldn't be necessary with webpack cache, right?
            // Test performance impact
            cacheDirectory: '.cache/storybook/babel-loader',
            cacheCompression: false,
          },
        },
      },
    ],
  },
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, './.cache/storybook/webpack'),
    buildDependencies: {
      config: [__filename],
    },
  },
})
