<template>
  <!-- 封装svg公共组件 -->
  <svg :style="{ width, height }">
    <!-- xlink:href执行用哪一个图标,属性值务必#icon-图标名字 -->
    <!-- use标签fill属性可以设置图标的颜色 -->
    <use :xlink:href="'#icon-' + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: 'tuijiandan'
  },
  width: {
    type: String,
    default: '20px'
  },
  height: {
    type: String,
    default: '20px'
  },
  color: {
    type: String,
    default: 'pink'
  }
})
</script>

<style scoped></style>
