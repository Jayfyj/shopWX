const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const vConsolePlugin = require('vconsole-webpack-plugin')
//打包的时候如果需要压缩、混淆、去注释，去除debugger、console.log等
const TerserPlugin = require('terser-webpack-plugin')
//引入打包时，自动压缩
const FileManagerPlugin = require('filemanager-webpack-plugin')
//引入电脑ip地址
const { ipAddress } = require('./src/utils/getIPAddress')
//引入webpack
const webpack = require('webpack')
//引入预渲染插件
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

//引入压缩为gizp
const CompressionWebpackPlugin = require('compression-webpack-plugin')

//引入路径path
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './', // hash模式
  // publicPath: '/', // history模式
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: 'assets',
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: true,
  lintOnSave: false, //是否开启eslint
  devServer: {
    open: true, //是否自动弹出浏览器页面
    host: ipAddress,
    port: '8080',
    // https: true, //是否使用https协议
    hotOnly: false //是否开启热更新
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000/",
    //     secure: false,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "", //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉
    //     },
    //   },
    // },
  },
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 32,
            propList: ['*'],
            // selectorBlackList: ['.van-', '.mint-'] // 过滤掉.vant-开头的class，不进行rem转换
            selectorBlackList: ['.van-'] // 过滤掉.vant-开头的class，不进行rem转换
          })
        ]
      },
      sass: {
        sassOptions: {
          outputStyle: 'expanded'
        }
      }
    }
  },

  chainWebpack: (config) => {
    //定义别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@utils', resolve('src/utils'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))

    config.when(process.env.VUE_APP_CURRENTENV !== 'development', (config) => {
      // 需要排除的包(以下包不会进行打包,以下包通过cdn进行引入)
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        vuex: 'Vuex',
        vuedraggable: 'vuedraggable',
        echarts: 'echarts',
        vant: 'vant',
        zepto: '$'
        // "vue-better-calendar": "vue-better-calendar"
      })
    })

    //使用zepto
    config.module
      .rule('zepto')
      .test(require.resolve('zepto'))
      .use('exports')
      .loader('exports-loader?window.Zepto')
      .end()
      .use('script')
      .loader('script-loader')
      .end()
    config
      .plugin('env')
      .use(require.resolve('webpack/lib/ProvidePlugin'), [{ $: 'zepto' }])

    //压缩图片
    const imagesRule = config.module.rule('images')
    imagesRule
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()

    //图片小于20K转化base64
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 20000 }))
  },
  configureWebpack: (config) => {
    if (process.env.VUE_APP_CURRENTENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
      config['performance'] = {
        //打包文件大小配置
        maxEntrypointSize: 10000000, // 此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示 单位是（bytes）
        maxAssetSize: 30000000 // 此选项根据单个资源体积，控制 webpack 何时生成性能提示 单位是（bytes）
      }
      config.plugins.push(
        new TerserPlugin({
          // cache: true,
          // sourceMap: false,
          // // 多进程
          // parallel: true,
          terserOptions: {
            // ecma: undefined,
            // warnings: false,
            // parse: {},
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: true,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        }),

        //压缩为gizp
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          // test: /\.js$|\.html$|\.json$|\.css/,
          test: /\.js$|\.json$|\.css/,
          threshold: 10240, // 只有大小大于该值的资源会被处理(10K)
          minRatio: 0.8 // 只有压缩率小于这个值的资源才会被处理
          // deleteOriginalAssets: true // 删除原文件
        })
      )
    }

    // 公共代码抽离
    // config.optimization = {
    //   splitChunks: {
    //       cacheGroups: {
    //           vendor: {
    //               chunks: 'all',
    //               test: /node_modules/,
    //               name: 'vendor',
    //               minChunks: 1,
    //               maxInitialRequests: 5,
    //               minSize: 0,
    //               priority: 100
    //           },
    //           common: {
    //               chunks: 'all',
    //               test: /[\\/]src[\\/]js[\\/]/,
    //               name: 'common',
    //               minChunks: 2,
    //               maxInitialRequests: 5,
    //               minSize: 0,
    //               priority: 60
    //           },
    //           styles: {
    //               name: 'styles',
    //               test: /\.(sa|sc|c)ss$/,
    //               chunks: 'all',
    //               enforce: true
    //           },
    //           runtimeChunk: {
    //               name: 'manifest'
    //           }
    //       }
    //   }
    // }

    //生产环境去掉vconsole调试器
    let envType = process.env.VUE_APP_CURRENTENV !== 'production'
    let pluginsDev = [
      new vConsolePlugin({
        filter: [],
        enable: envType
      })
    ]

    if (process.env.VUE_APP_CURRENTENV !== 'development') {
      //打包的时候，自动生成压缩包
      config.plugins.push(
        new FileManagerPlugin({
          events: {
            onEnd: {
              delete: ['./dist.zip'],
              archive: [{ source: './dist', destination: './dist.zip' }]
            }
          }
        })
      )
    }

    //不需要引入多种语言包
    config.plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
    )

    // //预渲染首页
    // if (process.env.VUE_APP_CURRENTENV !== 'development'){
    //   config.plugins.push(
    //     new PrerenderSPAPlugin({
    //       // 生成文件的路径，也可以与webpakc打包的一致。
    //       // 下面这句话非常重要！！！
    //       // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //       staticDir: path.join(__dirname,'dist'),
    //       // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //       routes: ['/'],
    //       // 这个很重要，如果没有配置这段，也不会进行预编译
    //       renderer: new Renderer({
    //           inject: {
    //               foo: 'bar'
    //           },
    //           headless: true,
    //           // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //           renderAfterDocumentEvent: 'render-event'
    //       })
    //     }),
    //   )
    // }

    config.plugins = [...config.plugins, ...pluginsDev]
  }
}
