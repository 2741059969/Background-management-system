<template>
  <div>useAttrs子组件,{{ obj }}</div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
defineProps(['type'])
let obj = useAttrs()
console.log(obj)
</script>

<style scoped></style>
