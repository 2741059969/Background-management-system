<template>
  <div>
    <p>测试组件</p>
    <el-scrollbar>
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  height: 40px;
  background-color: antiquewhite;
  text-align: center;
}
</style>
