<template>
  <div class="father">
    <p>vmodel父组件 :{{ num }},{{ age }}</p>
    <WSon v-model="num" v-model:age="age"></WSon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WSon from './WSon.vue'
let num = ref(0)
let age = ref(18)
</script>

<style scoped>
.father {
  background-color: yellow;
}
</style>
