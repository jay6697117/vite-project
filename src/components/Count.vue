<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(1);
let color = ref('red');
function add() {
  count.value += 1;
  color.value = count.value % 2 === 0 ? 'blue' : 'red'; //随机生成blue red
}
function sub() {
  count.value -= 1;
  color.value = count.value % 2 === 0 ? 'purple' : 'green'; //purple cyan
}
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
button {
  width: 20px;
  margin-right: 10px;
}
button:last-child {
  margin-right: 0;
}
</style>
>
