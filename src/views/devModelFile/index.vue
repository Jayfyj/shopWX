<template>
  <LayOutIndex>
    <div class="title">
      <strong style="color: green">{{ title }}</strong>
    </div>
    <div class="content">
      <p class="text" v-html="content"></p>
    </div>
    <div class="title">
      <strong style="color: green">开发两种方法：</strong>
    </div>
    <div class="step">
      <p class="text">
        1. 在veiws文件里面，新建文件夹，里面新建 api.js(接口文件),.vue
        文件(组件页面),route.js(路由文件)
      </p>
      <p class="text">
        2. 在veiws文件里面，复制devModelFile文件夹（最好重命名）
      </p>
    </div>
    <div class="btn">
      <van-button @click="goHome" type="primary">返回首页</van-button>
    </div>
  </LayOutIndex>
</template>

<script>
import { ref } from '@vue/composition-api'
import Router from '@/router'

export default {
  name: 'devModelFile',
  setup() {
    //标题
    const title = ref('开发说明')

    const contentText = `
      本项目是使用<strong style="color:green">vue2</strong>开发的，
      因为<strong style="color:green">Vue3</strong>已经发布了，
      并且<strong style="color:green">2022年02月07日</strong>开始，
      最新的版本默认为<strong style="color:green">Vue3</strong>，
      所以本项目已经引入了<strong style="color:green">Vue</strong>的组合API,
      <strong style="color:green">route</strong>和<strong style="color:green">store</strong>因为没有引入，
      所以还是使用<strong style="color:green">vue2</strong>用法，
      里面的页面都改为使用组合API的写法，不过还是可以使用<strong style="color:green">vue2</strong>的写法，
      但是还是建议以后开发使用组合API开发。
    `

    //内容
    const content = ref(contentText)

    function goHome() {
      localStorage.setItem('devLook', true)
      Router.replace('/')
    }

    return {
      title,
      content,
      goHome
    }
  }
}
</script>

<style scoped lang="scss">
.layOutIndex{
  text-align: center;
  // padding: 5%;
  > .title {
    margin-top: 10%;
  }
  > .content {
    padding: 0 5%;
    margin-top: 5%;
    > .text {
      font-size: 30px;
      //缩进
      text-indent: 60px;
      text-align: left;
      line-height: 50px;
      //设置字体间距
      letter-spacing: 5px;
    }
  }
  > .step {
    padding: 0 5%;
    margin-top: 5%;
    > .text {
      font-size: 30px;
      //缩进
      text-indent: 60px;
      text-align: left;
      line-height: 50px;
      //设置字体间距
      letter-spacing: 5px;
    }
  }
  > .btn {
    margin-top: 10%;
  }
}
</style>
