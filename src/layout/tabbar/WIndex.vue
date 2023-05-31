<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="tabbar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/WIndex.vue'
import Setting from './setting/WIndex.vue'
</script>

<style scoped lang="less">
.tabbar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .tabbar_left {
    // background-color: aquamarine;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    // background-color: yellow;
    display: flex;
    align-items: center;
  }
}
</style>
