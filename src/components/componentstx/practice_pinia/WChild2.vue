<template>
  <div>孩子2</div>
  <p>count:{{ counterstore.count }},{{ counterstore.doublecount }}</p>
  <button @click="add">加</button>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
let counterstore = useCounterStore()
console.log(counterstore)
const add = () => {
  counterstore.addcount()
}
</script>

<style scoped></style>
