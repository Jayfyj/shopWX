import Vue from 'vue'

//获取directives下所有模块
const modulesFiles = require.context('./modules', true, /\.js$/)
//遍历导入
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  moduleName = moduleName.replace(/v\-/, '').replace(/\/index/,'')
  modules[moduleName] = value.default
  return modules
}, {})


for(let key in modules){
  Vue.directive(key, modules[key])
}