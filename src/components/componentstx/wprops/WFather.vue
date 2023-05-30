<template>
  <div>父组件money:{{ money }}</div>
  <button @click="addmoney">点击加钱</button>
  <Son :money="money"></Son>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Son from './WSon.vue'
let money = ref(0)
const addmoney = () => {
  money.value += 10
}
</script>

<style scoped></style>
