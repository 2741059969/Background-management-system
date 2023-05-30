<template>
  <div>爷爷组件</div>
  <BaBa></BaBa>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import BaBa from './BaBa.vue'
let money = ref(999)
provide('money', money)
</script>

<style scoped></style>
