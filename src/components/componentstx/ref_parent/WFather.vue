<template>
  <div>ref父组件</div>
  <WSon ref="son"></WSon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WSon from './WSon.vue'
let son = ref()
console.log(son.value)
</script>

<style scoped></style>
