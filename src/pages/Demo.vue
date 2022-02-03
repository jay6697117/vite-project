<template>
  <div class="demo">
    <div class="box" :style="{ width: `${width}px` }"></div>
    <div class="box1" :style="{ width: `${width}px` }" :class="{ 'box1-animation': box1Animation }"></div>
    <button @click="changeWidth">加宽</button>
    <button @click="changeWidth1">开启动画</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let width = ref(100);
let box1Animation = ref(false);
let left = computed(() => {
  return `calc(100% - ${width.value}px)`;
});
function changeWidth() {
  width.value += 100;
}
function changeWidth1() {
  box1Animation.value = !box1Animation.value;
}
</script>

<style lang="scss" scoped>
@keyframes move {
  0% {
    left: 0;
  }
  50% {
    left: v-bind(left);
  }
  100% {
    left: 0;
  }
}
.demo {
  background-color: lightblue;
  padding: 5px;
  .box {
    margin-bottom: 10px;
    background-color: blue;
    height: 100px;
    transition: width 2s linear;
  }

  .box1 {
    background-color: red;
    height: 100px;
    transition: width 2s linear;
    position: relative;
  }

  .box1-animation {
    animation-name: move;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  button {
    margin: 10px;
    padding: 4px 12px;
    border-radius: 10px;
    border: none;
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
}
</style>
