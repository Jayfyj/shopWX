# vue-mobile

# 开发

### 1)

开发页面的时候类似开发小程序，例如:在对应的页面的 views 文件夹，
新建 home 文件夹，里面新建 api.js(接口文件),.vue 文件(组件页面),route.js(路由文件)

### 2)

reactive 声明的响应式对象被 arr 代理，操作代理对象需要有代理对象的前缀，直接覆盖会丢失响应式，
所以，vue3 使用 proxy，对于对象和数组都不能直接整个赋值 需要这样：对象添加一个属性再赋值
let formValue = reactive({ value: {} })
let arr = reactive({ value: [] })

### 3)

使用美化插件，(在 vscode 下载插件，Prettier - Code formatter)，
配置步骤：

（1）在根目录创建.prettierrc 文件，里面内容，本次项目添加(百度自己了解，按照自己要求添加):
{
"semi": false,  
 "singleQuote": true,  
 "trailingComma": "none",
"bracketSpacing": true  
}

（2）在文件 -> 首选择 -> 设置 -> 文本编译器 -> 格式化 -> 勾选 Format On Save

（3）在随意一个.vue 的文件，右键选择使用...格式化文档，然后选择配置默认格式化程序，然后选择 Prettier - Code formatter

#### 注意:以为在开发移动端的时候(PC 端可以忽略)，不想 px 转化 rem，会写成大写 PX，但是因为使用了美化插件，也会将 PX 转化 px，所以为了不转化，需要配置 setting.json，配置步骤:

(1)在文件 -> 首选择 -> 设置 ,选择右上边的文件图标，一般都是第一个图标，

（2）打开 setting.json 文件，在里面添加内容（这样 PX 不会转化了）:
{
"vetur.format.defaultFormatter.css": "none",
"vetur.format.defaultFormatter.scss": "none",
"vetur.format.defaultFormatter.less": "none",
"[vue]": {
"editor.defaultFormatter": "esbenp.prettier-vscode"
},
}

### 4)

在设置 mock 数据的时候，接口名字不用相同，就是一个接口比较长，短的接口刚好完全和长的一部分重合，
就不会请求长的接口，例如：

短的接口：/sever/table，
长的接口：/sever/tablejson （不会请求到，因为和短的重合）

### 5)

因为还是使用 vue-router4.0 以下 的路由配合组合 API，如果需要路由进行响应操作，所以也要将路由赋予响应模式，进行操作,例如：

import router from '@/router'
setup() {

    //设置变量用于路由赋值,用于监听路由变化
    let routers = reactive({ value: router })

    //监听路由变化
    watch(
      () => routers.value.currentRoute,
      (val) => {
        //要执行的方法
        setTags(val)
      }
    )

}

# 遇到问题

### 1)

compression-webpack-plugin 插件问题:

报错：TypeError: Cannot read property ‘tapPromise‘ of undefined
解决：先执行卸载命令->npm uninstall compression-webpack-plugin，执行安装命令->npm i compression-webpack-plugin@5.0.1

### 2)

terser-webpack-plugin 问题

报错: Cannot read properties of undefined (reading 'javascript')
解决：因为本次项目是使用 webpack4.x 的，所以要下载对应版本的插件即下载terser-webpack-plugin@4.xx,就可以了

### 3) (todo)

在全屏滑动自动播放视频的时候，都是默认静音的(不静音不生效滑动，因为谷歌 66 版本就开始限制了)，怎么解决还在找......
在真机上面，没有影响，不过在手机网页上面 video 标签始终是最高，遮挡其他元素，还在想怎么解决......

解决方法:可以使用谷歌的浏览器(暂时知道可以解决 video 层数高的问题)

### 4)

html2canvas 导出带滚动条截取不到超出部分的 bug
解决:在需要截取的页面，的内容外框再加一层 div 包裹，然后设置 windowHeight 和 height 两个参数，就行了，
例子查看：scr/views/demo/textAlignPage/index.vue

### 5)

重新安装所有依赖的时候，在安装 pdfjs-dist，
会报错 ERROR Failed to compile with 1 error；error in ./node_modules/pdfjs-dist/build/pdf.js
解决:再次执行 npm i pdfjs-dist@xxx（对应版本），单独下载 pdfjs-dist 依赖，然后再执行启动，项目 OK~

# 使用 git 的小乌龟上传代码问题

### 1）

使用 ssh，进行代买的管理，所以需要对可视化工具进行操作配置 ssh client，步骤：

1.打开工具的 setting，选择 netWork 选项，

2.在 ssh client 填入 git 的 '安装地址\user\bin\ssh.exe',我这里是‘D:\Program Files\Git\usr\bin\ssh.exe’
