<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="iconname"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包动态展示路由名字与标题 -->
    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <!-- 图标 -->
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <!-- 面包屑展示匹配路由的标题 -->
      <span class="bread_title">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
// import useLayOutSettingStore from '@/store/modules/setting'
//获取layout配置相关的仓库

let isfold = ref(true)
let iconname = computed(() => (isfold.value ? 'Fold' : 'Expand'))
//获取路由对象
let $route = useRoute()
// console.log($route.matched)

//点击图标的方法
const changeIcon = () => {
  //图标进行切换
  isfold.value = !isfold.value
}
</script>
<script lang="ts">
export default {
  name: 'BreadCrumb'
}
</script>

<style scoped>
.el-breadcrumb-item {
  display: flex;
  align-items: center;
}
.bread_title {
  margin-left: 10px;
}
</style>
