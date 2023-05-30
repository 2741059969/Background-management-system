<template>
  <div>vmode子组件数据：{{ modelValue }},{{ age }}</div>
  <button @click="handler">改变数据</button>
</template>

<script setup lang="ts">
let $emit = defineEmits(['update:modelValue', 'update:age'])
let props = defineProps(['modelValue', 'age'])
const handler = () => {
  $emit('update:modelValue', props.modelValue + 10)
  $emit('update:age', props.age + 100)
}
</script>

<style scoped></style>
