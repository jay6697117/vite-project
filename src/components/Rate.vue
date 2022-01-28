<template>
  <div class="rate" :style="colorStyle">
    <div class="rate" @mouseleave="mouseleave">
      <div class="hollow">
        <span @mouseenter="mouseenter(num)" v-for="num in 5" :key="num">☆</span>
      </div>
      <div class="solid" :style="solidWidth">
        <span @click="onRate(num)" @mouseenter="mouseenter(num)" v-for="num in 5" :key="num">★</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
//props
const props = defineProps({
  rate: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: 'red'
  }
});

const fontSizeNum = ref(32);
const fontSizeStr = ref(fontSizeNum.value + 'px');

//计算属性
const colorStyle = computed(() => {
  return `color: ${props.color}`;
});

// 评分宽度
const tmpRate = ref(props.rate);
function mouseenter(i) {
  console.log('mouseenter run');
  console.log('mouseenter i :>> ', i);
  tmpRate.value = i;
}
function mouseleave() {
  console.log('mouseleave run');
  console.log('props.rate :>> ', props.rate);
  tmpRate.value = props.rate;
}
const solidWidth = computed(() => `width:${tmpRate.value * fontSizeNum.value}px;`);
// let emits = defineEmits(['updateRate']); // 定义emits
let emits = defineEmits(['update:rate']); // 定义emits
function onRate(num) {
  console.log('onRate num :>> ', num);
  emits('update:rate', num);
  // emits('updateRate', num); //通过@引用
}
</script>

<style lang="scss" scoped>
.rate {
  width: 160px;
  margin: 10px auto;
  background-color: #ccc;
  font-size: v-bind(fontSizeStr);
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
