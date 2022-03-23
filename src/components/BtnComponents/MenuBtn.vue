<template>
  <!-- 显示菜单 -->
  <div>
    <i
      class="iconfont icon-fenlei1 IconFun"
      v-if="showMenu"
      @click="menuClick()"
    ></i>
    <van-popup
      v-model="showMenuPopup"
      @click-overlay="clickOverlay"
      position="right"
      :style="{ height: '100%', width: '40%' }"
    >
      <div class="optionWrap">
        <div
          class="optionBtn"
          v-for="(item, index) in menuList.value"
          :key="index"
          @click="goPage(item.url)"
        >
          <span>{{ item.text }}</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import Router from '@/router'
import { reactive, ref, onMounted } from '@vue/composition-api'
import { Dialog } from 'vant'

export default {
  name: 'MenuBtn',
  props: {
    //显示菜单
    showMenu: Boolean
  },
  setup() {
    let Route = reactive({ value: Router })

    //显示所有菜单
    let showMenuPopup = ref(false)

    //设置菜单数组
    let menuList = reactive({ value: [] })

    //菜单图标按钮
    function menuClick() {
      showMenuPopup.value = true
    }

    //收回
    function clickOverlay() {
      showMenuPopup.value = false
    }

    //跳转页面
    function goPage(url) {
      let currentUserAgent = navigator.userAgent
      let userAgentList = ['UCBrowser', 'Baidu']
      let Unsupported = userAgentList.some((item) => {
        return currentUserAgent.indexOf(item) > -1
      })

      if (Unsupported && url === '/videoFullPage') {
        Dialog({ message: '该浏览器不支持，可以使用谷歌浏览器' })
      } else {
        //不是uc浏览器执行的操作
        Route.value.replace({ path: url })
      }
    }

    onMounted(() => {
      menuList.value = JSON.parse(sessionStorage.getItem('menuList'))
    })

    return {
      menuList,
      showMenuPopup,
      menuClick,
      clickOverlay,
      goPage
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
.IconFun {
    font-size: 48px;
    color: white;
}

.optionWrap {
  padding: 2%;
  box-sizing: border-box;
  > .optionBtn {
    width: 100%;
    padding: 16px 0;
    background: #f7f8fa;
    border-radius: 15px;
    margin: 20px 0 0;
    text-align: center;
    font-size: 32px;
    color: #87CEFA;
    border:1px solid #87CEFA;
  }
}

</style>
