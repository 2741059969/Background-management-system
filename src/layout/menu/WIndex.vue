<template>
  <template v-for="item in routesinlayout" :key="item.path">
    <el-menu-item :index="item.path" @click="goRoute" v-if="!item.children">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-menu-item>
    <el-menu-item :index="item.children[0].path" @click="goRoute" v-else-if="item.children && item.children.length == 1">
      <el-icon>
        <component :is="item.children[0].meta.icon"></component>
      </el-icon>
      <span>{{ item.children[0].meta.title }}</span>
    </el-menu-item>
    <el-sub-menu :index="item.path" v-else>
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 根据路由信息递归生成子组件 -->
      <MenuW :routesinlayout="item.children"></MenuW>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps(['routesinlayout'])
// console.log(arr)

const $router = useRouter()
const goRoute = (a: any) => {
  console.log('导航被点击了')
  console.log(a.index)
  $router.push(a.index)
}
</script>
<script lang="ts">
export default {
  name: 'MenuW'
}
</script>

<style scoped></style>
