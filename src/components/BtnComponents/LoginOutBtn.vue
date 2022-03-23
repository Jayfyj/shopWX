<template>
  <!-- 返回按钮 -->
  <i
    class="iconfont icon-tuichu IconFun"
    v-if="loginOut"
    @click="LoginOut()"
  ></i>
</template>

<script>
import Router from '@/router'
import { reactive } from '@vue/composition-api'
import { Dialog } from 'vant'

export default {
  name: 'LoginOutBtn',
  props: {
    //是否显示退出按钮
    loginOut: Boolean
  },
  setup() {
    let Route = reactive({ value: Router })

    function LoginOut() {
      Dialog.confirm({
        message: '确定退出？'
      })
        .then(() => {
          Route.value.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    }

    return {
      LoginOut
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
