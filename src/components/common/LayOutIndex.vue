<template>
  <div
    class="layOutIndex"
    v-waterMarker="{
      text: '杰哥版权所有',
      textColor: 'rgba(180, 180, 180, 0.4)'
    }"
  >
    <!-- 浮动按钮 -->
    <FloatBtn
      :floatBtnShow="floatBtnShow"
      @onFloatBtnClicked="
        () => {
          $router.replace('/')
        }
      "
    >
      首页
    </FloatBtn>
    <!-- 标题 -->
    <TitleNav
      :title="$route.meta.title"
      v-bind="$attrs"
      :titleShow="titleShow"
    />
    <slot></slot>
    <!-- 底部tab -->
    <BottomNav :bottomShow="bottomShow" />
  </div>
</template>

<script>
export default {
  name: 'LayOut',
  props: {
    titleShow: Boolean,
    bottomShow: Boolean,
    floatBtnShow: Boolean
  }
}
</script>

