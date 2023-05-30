<template>
  <div>useAttrs父组件</div>
  <WSon type="a" :age="8" :money="999" @chan="handle"></WSon>
</template>

<script setup lang="ts">
import WSon from './WSon.vue'
const handle = () => {
  console.log(111)
}
</script>

<style scoped></style>
