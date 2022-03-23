import Vue from 'vue'

//获取components下所有模块
const modulesFiles = require.context('./common/', true, /\.vue$/)
//遍历导入
const componentsModules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

for (let key in componentsModules) {
  Vue.component(key, componentsModules[key])
}
