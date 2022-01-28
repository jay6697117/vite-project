<template>
  <div class="rate" :style="colorStyle">
    <div class="rate" @mouseout="mouseOut">
      <span class="hollow"><span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span></span>
      <span class="solid" :style="fontwidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, computed } from 'vue';
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
let colorStyle = computed(() => {
  return `color: ${props.color}`;
});

// 评分宽度
let width = ref(props.rate);
function mouseOver(i) {
  width.value = i;
}
function mouseOut() {
  width.value = props.rate;
}
const fontwidth = computed(() => `width:${width.value}em;`);
let emits = defineEmits(['update-rate']); // 定义emits
function onRate(num) {
  console.log('num :>> ', num);
  emits('update-rate', num); //通过@引用
}
</script>

<style lang="scss" scoped>
.rate {
  width: 160px;
  margin: 10px auto;
  background-color: #ccc;
  font-size: 32px;
  position: relative;

  .hollow {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .solid {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}
</style>
