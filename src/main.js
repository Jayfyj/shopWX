import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// import store from '@/store'
import 'amfe-flexible'
import '@/assets/common.css' //公共样式
import '@/assets/font/font.css'
import '@/assets/iconfont/iconfont.css'

//使用组合API
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

//没有接口使用mock
// const env = process.env.VUE_APP_CURRENTENV
// if(env === "development"){
// const Mock = require('@/mock')
// }

//引入vant
// import '@/plugins/vant'

//引入zepto
// import $ from 'zepto'

//引入自定义过滤
// import '@/filter'

//引入自定义指令
// import '@/directives'

//引入全局组件
// import '@/components'

// rem等比适配配置文件
import '@utils/setRem'

//引入moment
// import moment from 'moment' //导入文件
// Vue.prototype.$moment = moment //赋值使用

//引入公共方法
// import { common } from '@utils/common'
// Vue.use(common)

//引入jsonp
// import { VueJsonp } from 'vue-jsonp'
// Vue.use(VueJsonp)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: (h) => h(App)
  /* 这句非常重要，否则预渲染将不会启动 */
  // mounted () {
  //     document.dispatchEvent(new Event('render-event'))
  // }
}).$mount('#app')
