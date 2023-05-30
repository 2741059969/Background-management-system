<template>
  <div>emits子组件:{{ money }}</div>
  <button @click="addmoney">点击加钱</button>
</template>

<script setup lang="ts">
let props = defineProps(['money'])
let $emit = defineEmits(['change'])
//不需要.value
console.log(props.money)

const addmoney = () => {
  $emit('change', props.money + 9)
}
</script>

<style scoped></style>
