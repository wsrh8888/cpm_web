const plugins = []
const presets = ['@vue/cli-plugin-babel/preset']
plugins.push(...['@vue/babel-plugin-transform-vue-jsx', 'transform-class-properties'])
presets.push(['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }])

if (process.env.API_ENV === 'prod') {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets,
  plugins
}
