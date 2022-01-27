<template>
  <div>
    <router-link to="/">首页</router-link>
    |
    <router-link to="/about">关于</router-link>
  </div>
  <hr />
  <router-view></router-view>
  <hr />
  <div style="background-color: #ccc">
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
