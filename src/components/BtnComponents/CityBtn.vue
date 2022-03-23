<template>
  <!-- 显示城市 -->
  <div>
    <span v-if="showAddress">{{ currentCity }}</span>
  </div>
</template>

<script>
import { loadBMap } from '@/utils/getCurrentAddress'
import { onMounted, ref } from '@vue/composition-api'

export default {
  name: 'CityBtn',
  props: {
    //是否显示地址
    showAddress: Boolean
  },
  setup() {
    //当前城市
    let currentCity = ref('')

    onMounted(() => {
      //定义回调函数
      window.initBaiduMapScript = () => {
        let geolocation = new window.BMap.Geolocation()
        //混合开发才起作用
        geolocation.enableSDKLocation()
        geolocation.getCurrentPosition(
          function (r) {
            let info = '获取不到位置'
            if (this.getStatus() == 0) {
              //成功获取位置信息
              const { address } = r
              info = address.city
            } else {
              //无法获取到位置信息
              console.log('无法获取到位置信息')
            }
            currentCity.value = info
          },
          {
            enableHighAccuracy: true
          }
        )
      }

      //调用脚本获取位置信息
      loadBMap('initBaiduMapScript')
    })

    return {
      currentCity
    }
  }
}
</script>

<style scoped="scoped" lang="scss">
</style>
