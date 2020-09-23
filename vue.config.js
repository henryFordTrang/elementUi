const devPath = {
  name: '/study',
  path: ''
  // name: '/platform-admin',
  // path: '/phone/'
}

// const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  // 基本Url
  publicPath: process.env.NODE_ENV === 'production' ? '././' : `${devPath.name}${devPath.path}`,
  // 打包Map
  productionSourceMap: false,
  // 打包路径
  outputDir: 'nancy',
  devServer: {
    disableHostCheck: true,
    port: 9090,

    proxy: {
      [`^${devPath.name}`]: {
        target: 'http://192.168.10.3:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  // 修改 webpack
  chainWebpack: config => {
    // 删除link 预取和预加载
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')

    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        mozjpeg: {
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false
        },
        pngquant: {
          quality: '65-90',
          speed: 4
        },
        gifsicle: {
          interlaced: false
        }
      })
      .end()

    // 使用cnpm可能会导致热更新失效，设置可恢复热更新
    config.resolve.symlinks(true)
    return config
  }
}
