<template>
  <div>emits父组件money:{{ money }}</div>
  <WSon @change="addmoney" :money="money"></WSon>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WSon from './WSon.vue'
let money = ref(0)
const addmoney = (val: number) => {
  money.value += val
}
</script>

<style scoped></style>
