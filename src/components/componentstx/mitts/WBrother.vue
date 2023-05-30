<template>
  <div>mitt兄弟组件</div>
  <p><button  @click="addmoney">给兄弟送钱</button></p>
</template>

<script setup lang="ts">

import mitter from './mittexport';
const addmoney=()=>{
  mitter.emit('hello',10)
}

</script>

<style scoped></style>
