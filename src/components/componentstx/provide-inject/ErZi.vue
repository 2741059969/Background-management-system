<template>
  <div>儿子组件:{{ money }}</div>
  <button @click="addmoney">儿子修改数据</button>
</template>

<script setup lang="ts">
import { Ref, inject } from 'vue'
let money = inject('money')
let addmoney = () => {
  console.log(money.value++)
}
</script>

<style scoped></style>
