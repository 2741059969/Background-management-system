<template>
  <div>mitt父组件money:{{ money }}</div>
  <WSon></WSon>
  <Wbrother></Wbrother>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import WSon from './WSon.vue'
import Wbrother from './Wbrother.vue'
import mitter from './mittexport'
let money = ref(0)
</script>

<style scoped></style>
