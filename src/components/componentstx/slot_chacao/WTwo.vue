<template>
  <div>
    <p>插槽</p>
    <WOne :data="data">
      <template v-slot="obj">
        <ul>
          <li>{{ obj.age }}</li>
          <li>{{ obj.money }}</li>
        </ul>
      </template>
    </WOne>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import WOne from './WOne.vue'
let data = reactive({ count: 1999, str: 'hello slot' })
</script>

<style scoped></style>
