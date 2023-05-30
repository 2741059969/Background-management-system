<template>
  <div>mitt子组件money:{{ money }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import mitter from './mittexport'
let money = ref(0)
onMounted(() => {
  mitter.on('hello', function (value: any) {
    money.value += value
  })
})
</script>

<style scoped></style>
