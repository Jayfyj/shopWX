<template>
  <!-- 头像显示 -->
  <img
    class="headerImg"
    height="45"
    width="45"
    v-if="userInfoImg"
    :src="userInfoImg"
    @click="openImg([userInfoImg])"
  />
</template>

<script>
import { computed } from '@vue/composition-api'
import { ImagePreview } from 'vant'

export default {
  name: 'ImgBtn',
  props: {
    //头像图片
    userHeaderImg: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    //预览图片
    function openImg(imgLIst) {
      ImagePreview(imgLIst)
    }

    const userInfoImg = computed(() => {
      return props.userHeaderImg || sessionStorage.getItem('userInfoImg')
    })

    return {
      userInfoImg,
      openImg
    }
  }
}
</script>

<style scoped="scoped" lang="scss">

.headerImg{
    // height: 45PX;
    // height: 45PX;
    border-radius:45PX ;
    margin-left:5PX ;
}
  
</style>
