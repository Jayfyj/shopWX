   /* * 加载地图
    * @param {Function} callback 回调函数名称，回调函数将会挂载到window上，例如：window.initBaiduMapScript，在方法中就能拿到BMap对象
    */
export function loadBMap(callback,ak) {
    let script = document.createElement('script')
    ak =  ak ||'ttCN6SEMnEfL6ai9n7ogxZrLZU8vT7hN'
    script.src = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=` + callback
    document.body.appendChild(script)
}