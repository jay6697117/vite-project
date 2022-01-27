<template>
  <Count />
  <button @click="handleUpdate">更新</button>
  <button @click="handleReset">重置</button>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import Count from '@/components/Count.vue';
import useFavicon from '@/utils/useFavicon.js';
let { reset, favicon } = useFavicon();

function handleUpdate() {
  favicon.value = '/runoob.ico';
}
function handleReset() {
  reset();
}

onMounted(() => {
  console.log('getCurrentInstance() :>> ', getCurrentInstance());
});
</script>

<style lang="scss" scoped>
button {
  width: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}
button:last-child {
  margin-right: 0;
}
</style>
