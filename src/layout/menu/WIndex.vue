<template>
  <el-menu-item index="/home/shouye" @click="goRoute">
    <el-icon><House /></el-icon>
    <!-- <Edit /> -->
    <span>首页</span>
  </el-menu-item>
  <el-menu-item index="/screen" @click="goRoute">
    <el-icon><Platform /></el-icon>

    <span>数据大屏</span>
  </el-menu-item>
  <el-sub-menu index="">
    <template #title>
      <el-icon><UserFilled /></el-icon>
      <span>权限管理</span>
    </template>
    <el-menu-item index="/home/auth" @click="goRoute">
      <el-icon><UserFilled /></el-icon>
      <span>权限管理</span>
    </el-menu-item>
    <el-menu-item index="/home/auth" @click="goRoute">
      <el-icon><UserFilled /></el-icon>
      <span>权限管理</span>
    </el-menu-item>
  </el-sub-menu>
  <el-sub-menu index="2-2">
    <template #title>
      <el-icon><Goods /></el-icon>
      <span>商品管理</span>
    </template>
    <el-menu-item index="/home/product" @click="goRoute">
      <el-icon><UserFilled /></el-icon>
      <span>商品管理</span>
    </el-menu-item>
    <el-menu-item index="/home/product" @click="goRoute">
      <el-icon><Goods /></el-icon>
      <span>商品管理</span>
    </el-menu-item>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const $router = useRouter()
const goRoute = (a: any) => {
  console.log('导航被点击了')
  console.log(a.index)
  $router.push(a.index)
}
</script>

<style scoped></style>
