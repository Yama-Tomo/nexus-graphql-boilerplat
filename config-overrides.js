const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDev = process.env.NODE_ENV == 'development'

module.exports = {
  webpack(config, env) {
    config.module.rules[2].oneOf.forEach(rule => {
      if (rule.test) {
        const tests = Array.isArray(rule.test) ? rule.test : [rule.test]

        if (tests.some(t => t.test('.tsx'))) {
          if (isDev) {
            rule.options.plugins.push(require.resolve('react-refresh/babel'))
          }
        }
      }
    })


    if (isDev) {
      config.plugins.push(new ReactRefreshWebpackPlugin())
    }

    // enable alias import
    config.resolve.alias['~'] = path.resolve('./src')

    return config
  },
  jest(config) {
    config.moduleNameMapper['^~/(.*)$'] = '<rootDir>/src/$1'
    return config
  }
}