<template>
  <el-button size="small" icon="Refresh" type="primary" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" type="primary" circle @click="fullScreen"></el-button>

  <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
    <!-- 表单元素,默认插槽 -->
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker @change="setColor" v-model="color" size="small" show-alpha :predefine="predefineColors" />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch @change="changeDark" v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt active-icon="MoonNight" inactive-icon="Sunny" />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>
  <img src="../../logo/aemo.jpg" style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%" />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        <el-dropdown-item @click="viewhelp">查看帮助</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {reqLogout} from '@/api/user/index'
// //获取路由器对象
let $router = useRouter()
// //获取路由信息对象
let $route = useRoute()
//主题颜色，
let color = ref('white')
//改变主题颜色
let setColor = () => {
  //通知js修改根节点的样式对象的属性与属性值
  const html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}
//预选颜色
const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577'])

let dark = ref(false)
let changeDark = () => {
  //获取HTML根节点
  let html = document.documentElement
  //判断HTML标签是否有类名dark
  dark.value ? (html.className = 'dark') : (html.className = '')
}
// //刷新按钮点击回调
const updateRefsh = () => {
  console.log('点击了刷新按钮')
}
// //全屏按钮点击的回调
const fullScreen = () => {
  //DOM对象的一个属性:可以用来判断当前是不是全屏模式[全屏:true,不是全屏:false]
  let full = document.fullscreenElement
  //切换为全屏模式
  if (!full) {
    //文档根节点的方法requestFullscreen,实现全屏模式
    document.documentElement.requestFullscreen()
  } else {
    //变为不是全屏模式->退出全屏模式
    document.exitFullscreen()
  }
}
//
const viewhelp = () => {
  console.log('点击了查看帮助下拉项')
}
const logout =async () => {
  console.log('点击了退出登录按钮')
  await reqLogout()
  localStorage.removeItem('TOKEN')
  $router.push({ path: '/login' })
}
</script>

<script lang="ts">
export default {
  name: 'SettingW'
}
</script>
<style scoped></style>
