 
<template>
  <div class="homePage">
    <img :src="logoImg" width="150" class="logo" />

    <strong class="shopName">{{ shopName }}</strong>

    <van-button icon="wechat" class="btn" @click="preview">{{
      btnName
    }}</van-button>

    <span class="author"> made on <strong>jayfyj</strong> </span>
  </div>
</template>
<script>
import { ref } from '@vue/composition-api'
import { Button, ImagePreview } from 'vant'

const logo = require('@/assets/images/logo.jpg')

export default {
  name: 'home',
  components: {
    [Button.name]: Button
  },
  setup() {
    let shopName = ref('大雨—潮服')

    let logoImg = ref(logo)

    let btnName = ref('点击添加店长微信号')

    function preview() {
      ImagePreview({
        images: [require('@/assets/images/wx.jpg')],
        showIndex: false
      })
    }

    return {
      shopName,
      logoImg,
      btnName,
      preview
    }
  }
}
</script>
<style scoped lang="scss">
.van-button__icon{
  font-size: 26PX;
}
.homePage{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  >.logo{
    margin-top: 30PX;
    border-radius:150PX;
  }
  >.shopName{
    margin-top: 20PX;
    font-weight: bold;
    font-size: 46px ;
    color: black;
  }
  >.btn{
    margin-top: 30PX;
    background: black;
    color: white;
    width: 92vw;
    border-radius:6PX ;
    font-weight: bold;
    padding: 4PX;
    font-size: 14PX;
  }
  >.author{
    margin-top: 30PX;
    font-size: 12PX;
  }
}


</style>
