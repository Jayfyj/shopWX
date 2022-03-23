<template>
  <!-- 返回按钮 -->
  <i class="iconfont icon-fanhui IconFun" v-if="back" @click="backClick()"></i>
</template>

<script>
import Router from '@/router'
import { reactive } from '@vue/composition-api'

export default {
  name: 'BackBtn',
  props: {
    //显示返回图标
    back: Boolean
  },
  setup() {
    let Route = reactive({ value: Router })

    //回退图标按钮
    function backClick() {
      Route.value.go(-1)
    }
    return {
      backClick
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.IconFun {
    font-size: 48px;
    color: white;
}
  
</style>
