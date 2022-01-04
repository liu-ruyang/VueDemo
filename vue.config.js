module.exports = {
  devServer: {
    proxy: {
      '/api/a': {
        target: 'http://apis.juhe.cn', //设置调用接口域名和端口号别忘了加http  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api/a': '' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
        }
      },
      '/api/b': {
        target: 'https://www.cnblogs.com', //设置调用接口域名和端口号别忘了加http  //目标接口域名
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api/b': '' //这里理解成用‘/api’代替target里面的地址，组件中我们调接口时直接用/api代替
        }
      }
    }
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap'
    }
  }
}
//
// module.exports = {
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://apis.juhe.cn',
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/api': ''
//         }
//       },
//       '/foo': {
//         target: 'https://www.cnblogs.com',
//         ws: true,
//         changeOrigin: true,
//         pathRewrite: {
//           '^/foo': ''
//         }
//       }
//     }
//   }
// }