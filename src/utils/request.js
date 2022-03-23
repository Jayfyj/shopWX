import axios from 'axios'  //引入axios
import { Toast } from 'vant'
//下面这两个不一定需要引入，看你项目需要拦截的时候做什么操作，但是一般都需要引入store
import store from '@/store'  //引入store
import router from '@/router'  //引入router


const baseURL = ''
axios.defaults.baseURL = baseURL; // 配置axios请求的地址
axios.defaults.timeout = 30000;
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
// axios.defaults.crossDomain = true;
// axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
// axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (ever) => {
    for(let p in pending){
        if(pending[p].u === ever.url + '&' + ever.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}



let instance = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
})

function toastShow(text, time) {
  var title = text || "";
  if (time == 1) {
    Toast.clear();
  } else {
    Toast.loading({
          message: title,
          forbidClick: true,
          duration: time,
          type:"loading",
          loadingTypeL:"spinner"
      });
  }
};


// http request 拦截器
instance.interceptors.request.use(
  config => {
    //加载
    toastShow("", 0)
    const token = sessionStorage.getItem('token')
    if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token  //请求头加上token
    }
    // removePending(config); //在一个ajax发送前执行一下取消操作
    // config.cancelToken = new cancelToken((c)=>{
    //   // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
    //   pending.push({ u: config.url + '&' + config.method, f: c });  
    //   console.log(pending)
    // });
    return config
  },
  err => {
    return Promise.reject(err)
})


// http response 拦截器
instance.interceptors.response.use(
  response => {
    //取消模态框
    toastShow("", 1)
    // removePending(response.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除

    //拦截响应，做统一处理 
    if (response.data.code) {
      // switch (response.data.code) {
      //   case 1002:
      //     store.state.isLogin = false
      //     router.replace({
      //       path: 'login',
      //       query: {
      //         redirect: router.currentRoute.fullPath
      //       }
      //     })
      // }
      // console.log(response.data.code)
    }
    return response
  },
  //接口错误状态处理，也就是说无响应时的处理
  error => {
    return Promise.reject(error.response.status) // 返回接口返回的错误信息
})

export {
  instance,
  baseURL

}