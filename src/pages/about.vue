<template>
  <Count />
  <button @click="handleUpdate">更新</button>
  <button @click="handleReset">重置</button>
  <hr />
  <h1>你的评分是: {{ rate }}</h1>
  <Rate :rate="rate" :color="color" @update-rate="updateRate" />
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import Count from '@/components/Count.vue';
import Rate from '@/components/Rate.vue';
import useFavicon from '@/utils/useFavicon.js';
let { reset, favicon } = useFavicon();
let rate = ref(3.5);
let color = ref('blue');

function handleUpdate() {
  favicon.value = '/runoob.ico';
}
function handleReset() {
  reset();
}
function updateRate(val) {
  console.log('updateRate val :>> ', val);
  rate.value = val;
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
