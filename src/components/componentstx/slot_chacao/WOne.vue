<template>
  <div>
    <p>子组件</p>
    <!-- 默认插槽 -->

    <!-- <slot></slot>
    <slot></slot>
    <slot></slot> -->
    <!-- 具名插槽 -->
    <!-- <slot name="hello2"></slot>
    <slot name="hello1"></slot> -->
    <!-- 作用域插槽 -->
    <slot :age="data.count" :money="data.str"></slot>
    <!-- <slot age="10" money="200" name="zs"></slot> -->
  </div>
</template>

<script setup lang="ts">
let props = defineProps(['data'])
</script>

<style scoped></style>
