const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    extract: false,
    loaderOptions: {
      // TODO: this should be the ideal, but vue.config is not working
      sass: {}
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  }
}
