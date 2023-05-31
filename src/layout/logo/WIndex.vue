<template>
  <div class="logo" v-if="setting.logoshow">
    <img src="./aemo.jpg" alt="显示失败" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const setting = reactive({
  logoshow: true,
  logo: './aemo.jpg',
  title: '开源项目'
})
</script>

<style scoped lang="less">
.logo {
  background-color: blue;
  width: 100%;
  height: @base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  p {
    font-size: @base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>
