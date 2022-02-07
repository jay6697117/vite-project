<template>
  <div>
    <router-link to="/">首页</router-link>
    |
    <router-link to="/about">关于</router-link>
    |
    <router-link to="/demo">Demo</router-link>
  </div>
  <hr />
  <router-view v-slot:default="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <hr />
  <div style="background-color: #ccc; margin-top: 10px">
    <span style="margin-right: 10px">x:{{ x }}</span>
    <span>y:{{ y }}</span>
  </div>
  <hr />
  <div style="margin-top: 10px">
    <button @click="toggle">{{ isFullscreen ? '退出全屏' : '开启全屏' }}</button>
  </div>
</template>

<script setup>
import { useMouse } from '@/utils/mouse.js';
import proxy from '@/utils/proxy.js';
proxy();
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, toggle } = useFullscreen();
let { x, y } = useMouse();
</script>

<style lang="scss" scoped>
:global(#app) {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(200px);
}
.route-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.route-enter-active {
  transition: all 0.5s ease-out;
}
.route-leave-active {
  transition: all 0.5s ease-in;
}
</style>
