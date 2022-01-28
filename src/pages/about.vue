<template>
  <Count />
  <button @click="handleUpdate">更新</button>
  <button @click="handleReset">重置</button>
  <Rate :rate="rate" :color="color" />
  <input type="text" v-model="rateStr" />
  <Rate :rate="1" color="red" />
  <Rate :rate="2" color="purple" />
</template>

<script setup>
import { ref, computed, onMounted, watch, getCurrentInstance } from 'vue';
import Count from '@/components/Count.vue';
import Rate from '@/components/Rate.vue';
import useFavicon from '@/utils/useFavicon.js';
let { reset, favicon } = useFavicon();
let rateStr = ref('');
let rate = ref(parseInt(rateStr.value) ? parseInt(rateStr.value) : 0);
let color = ref('blue');

function handleUpdate() {
  favicon.value = '/runoob.ico';
}
function handleReset() {
  reset();
}
onMounted(() => {
  console.log('getCurrentInstance() :>> ', getCurrentInstance());
});

watch(rateStr, newVal => {
  console.log('newVal :>> ', newVal, typeof newVal);
  if (!/^\+?[1-9]\d*$/.test(parseInt(newVal))) {
    rateStr.value = '';
  }
  if (parseInt(newVal) >= 5) {
    rateStr.value = '5';
  }
  rate.value = rateStr.value ? parseInt(rateStr.value) : 0;
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
