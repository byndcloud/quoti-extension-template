const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    extract: false,
    loaderOptions: {
      // TODO: this should be the ideal, but vue.config is not working
      sass: {
        additionalData: `  
          @import "~vuetify/src/styles/styles.sass"
          @import "@/styles/index.sass"
          @import "@/styles/variables.sass"
        `
      }
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
