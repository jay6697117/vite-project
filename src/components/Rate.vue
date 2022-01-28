<template>
  <div class="rate" :style="colorStyle">
    {{ rateShow }}
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
let props = defineProps({
  rate: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: 'red'
  }
});
let rateShow = computed(() => {
  return '★★★★★☆☆☆☆☆'.slice(5 - props.rate, 10 - props.rate);
});

let colorStyle = computed(() => {
  return `color: ${props.color}`;
});
</script>

<style lang="scss" scoped>
.rate {
  margin: 10px 0;
  background-color: #ccc;
  font-size: 32px;
}
</style>
