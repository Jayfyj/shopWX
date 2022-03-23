/**
 * 这个是页面的的组件的同一出口文件
 * 可以使用两种方法导入：
 * 
 * 1.一个一个导入，并且可以自定义命名
 * import 名字 from 组件地址
 * 
 * 导出
 * export{
 *  名字
 * }
 * 
 * 2.利用webpack的方法，require.context获取components里面的.vue文件，
 * 导出的时候就是用新建组件的文件名字，但是不要组件里面嵌套组件，
 */

//获取components下所有模块
const modulesFiles = require.context('../components', true, /\.vue$/)
//遍历导入
const componentsModules = modulesFiles.keys().reduce((modules, modulePath) => {
  let moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  moduleName = moduleName.split('\/')[0]
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default componentsModules

