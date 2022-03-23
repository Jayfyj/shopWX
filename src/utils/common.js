//获取SessionId
export function getSessionId(cookieName) {
  // var c_name = 'JSESSIONID';
  // if (document.cookie.length > 0) {
  //     c_start = document.cookie.indexOf(c_name + "=")
  //     if (c_start != -1) {
  //         c_start = c_start + c_name.length + 1
  //         c_end = document.cookie.indexOf(";", c_start)
  //         if (c_end == -1) c_end = document.cookie.length
  //         return unescape(document.cookie.substring(c_start, c_end));
  //     }
  // }
  var strCookie = document.cookie
  var arrCookie = strCookie.split('; ')
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split('=')
    if (cookieName == arr[0]) {
      return arr[1]
    }
  }
  return ''
}

//获取路由链接的参数的值
export function getUrlParam(name, testUrl) {
  if (testUrl != '' && testUrl != null && testUrl != undefined) {
    var url = testUrl
  } else {
    var url = location.href
  }
  // console.log(url)
  return (
    decodeURIComponent(
      (new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [
        ,
        ''
      ])[1].replace(/\+/g, '%20')
    ) || null
  )
}

//返回小程序
export function goMiniProgram(pageUrl, data) {
  var dataParams = ''
  var newPageUrl = ''
  if (data) {
    for (var key in data) {
      dataParams += '&' + key + '=' + data[key]
    }
    dataParams = dataParams.replace('&', '?')
    newPageUrl = pageUrl + dataParams
    wx.miniProgram.navigateTo({ url: newPageUrl })
  } else {
    newPageUrl = pageUrl
    wx.miniProgram.navigateTo({ url: newPageUrl })
  }
}


//base64转化Blob,prefix为前缀, data:application/pdf;base64,
export function base64toBlob(dataurl, prefix) {
  if (prefix) {
    dataurl = prefix + dataurl
  }
  let arr = dataurl.split(',')
  let mime = arr[0].match(/:(.*?);/)[1]
  let bstr = atob(arr[1])
  let n = bstr.length
  let u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * url 转base64
 * 
 * let imgUrL = `http://XXX.jpg`
    urlToBase64(imgUrL).then(res => {
    // 转化后的base64图片地址
    console.log('base64', res)
    })
 * 
 * 
 */
export function urlToBase64(url, naturalWidth, naturalHeight) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = function () {
      let canvas = document.createElement('canvas')
      canvas.width = naturalWidth
      canvas.height = naturalHeight
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0)
      // result
      let result = canvas.toDataURL('image/png')
      resolve(result)
    }
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute('crossOrigin', 'Anonymous')
    image.src = url
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('urlToBase64 error'))
    }
  })
}

// blob 转 base64
export function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      resolve(e.target.result)
    }
    // readAsDataURL
    fileReader.readAsDataURL(blob)
    fileReader.onerror = () => {
      reject(new Error('blobToBase64 error'))
    }
  })
}

var common = {}
common.install = function (Vue, options) {
  Vue.prototype.$getSessionId = getSessionId
  Vue.prototype.$getUrlParam = getUrlParam
  Vue.prototype.$goMiniProgram = goMiniProgram
  Vue.prototype.$base64toBlob = base64toBlob
  Vue.prototype.$urlToBase64 = urlToBase64
  Vue.prototype.$blobToBase64 = blobToBase64
}
export { common }
