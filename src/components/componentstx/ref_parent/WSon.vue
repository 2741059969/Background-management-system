<template>
  <div>ref子组件:money{{ money }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let money = ref(100)
defineExpose({
  money
})
</script>

<style scoped></style>
