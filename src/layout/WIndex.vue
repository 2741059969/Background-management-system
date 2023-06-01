<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->

      <el-scrollbar class="scrollbar">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <MenuW :routesinlayout="routesinlayout"></MenuW>
        </el-menu>
      </el-scrollbar>
      <!-- <Menu></Menu> -->
    </div>
    <div class="layout_tabbar">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/WIndex.vue'
import Main from './main/WIndex.vue'
import MenuW from './menu/WIndex.vue'
import Tabbar from './tabbar/WIndex.vue'
import { routesinlayout } from '@/router/routes'
</script>

<style scoped lang="less">
.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: antiquewhite;
  .layout_slider {
    color: white;
    width: @base-menu-width;
    height: 100vh;
    // background: @base-menu-background;
    .scrollbar {
      // background-color: orange;
      // width: 100%;
      height: calc(100vh - @base-menu-logo-height);
    }
    .scrollbar-demo-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      margin: 10px;
      text-align: center;
      border-radius: 4px;
      background: var(--el-color-primary-light-9);
      color: var(--el-color-primary);
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - @base-menu-width);
    height: @base-tabbar-height;
    top: 0px;
    left: @base-menu-width;
    // background-color: pink;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - @base-menu-width);
    height: calc(100vh - @base-tabbar-height);
    left: @base-menu-width;
    top: @base-tabbar-height;
    padding: 20px;
    background-color: pink;
    overflow: auto;
  }
}
</style>
