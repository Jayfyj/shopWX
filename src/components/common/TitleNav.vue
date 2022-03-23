<template>
  <div
    class="titleNav"
    :style="{ height: wrapHeight, backgroundColor: BGColor }"
    v-if="titleShow"
  >
    <div class="titleLeft" :style="{ height: wrapHeight }">
      <!-- 返回按钮 -->
      <BackBtn :back="back" />

      <!-- 头像显示 -->
      <ImgBtn :userHeaderImg="userHeaderImg" />
    </div>
    <div class="titleCenter" :style="{ height: wrapHeight }">
      <span>{{ title }}</span>
    </div>
    <div class="titleRight" :style="{ height: wrapHeight }">
      <!-- 显示菜单 -->
      <MenuBtn :showMenu="showMenu" />

      <!-- 显示城市 -->
      <CityBtn :showAddress="showAddress" />

      <!-- 退出 -->
      <LoginOutBtn :loginOut="loginOut" />
    </div>
  </div>
</template>

<script>
import {
  BackBtn,
  ImgBtn,
  MenuBtn,
  LoginOutBtn,
  CityBtn
} from '../BtnComponents'

export default {
  name: 'titleNav',
  components: {
    BackBtn,
    ImgBtn,
    MenuBtn,
    LoginOutBtn,
    CityBtn
  },
  props: {
    //是否显示
    titleShow: {
      type: Boolean,
      default: true
    },

    //显示返回图标
    back: Boolean,

    //显示菜单
    showMenu: Boolean,

    //是否显示地址
    showAddress: Boolean,

    //是否显示退出按钮
    loginOut: Boolean,

    //标题
    title: {
      type: String,
      default: ''
    },

    //头像图片
    userHeaderImg: {
      type: String,
      default: ''
    },

    //标题高度
    wrapHeight: {
      type: String,
      default: '50px'
    },

    //标题背景色
    BGColor: {
      type: String,
      default: '#87CEFA'
    }
  }
}
</script>

<style scoped="scoped" lang="scss">

//左右padding
$paddingLAR: 8PX;

//标题字体和颜色(定义一个类，声明使用@mixin名字，引用@include名字)
@mixin titleFontSizeColor{
  font-size: 48px;
  color: white;
}

//图标大小和颜色
// @mixin titleIconSizeColor{
//   font-size: 48px;
//   color: white;
// }

.titleNav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 $paddingLAR;
  box-sizing: border-box;
  color: white;
  .titleLeft {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .titleCenter {
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      @include titleFontSizeColor;
    }
  }
  .titleRight {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
