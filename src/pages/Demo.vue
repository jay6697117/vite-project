<template>
  <div class="demo">
    <div class="box" :style="{ width: `${width}px` }"></div>
    <div class="box1" :style="{ width: `${width}px` }" :class="{ 'box1-animation': box1Animation }"></div>
    <button @click="changeWidth">加宽</button>
    <button @click="changeWidth1">开启动画</button>
    <hr />
    <div class="transition-style">
      <transition name="fade6">
        <h1 v-show="showTitle">{{ title }}</h1>
      </transition>
      <button @click="switchFn">{{ switchText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let width = ref(100);
let box1Animation = ref(false);
let title = ref('你好 Vue3');
let showTitle = ref(true);
let left = computed(() => {
  return `calc(100% - ${width.value}px)`;
});
let switchText = computed(() => {
  return showTitle.value ? '隐藏' : '显示';
});
function changeWidth() {
  width.value += 100;
}
function changeWidth1() {
  box1Animation.value = !box1Animation.value;
}

function switchFn() {
  showTitle.value = !showTitle.value;
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

  .transition-style {
    .fade6-enter-active,
    .fade6-leave-active {
      transition: opacity 5s ease;
    }

    .fade6-enter-to,
    .fade6-leave-from {
      opacity: 1;
    }

    .fade6-enter-from,
    .fade6-leave-to {
      opacity: 0;
    }
  }
}
</style>
