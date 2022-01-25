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
</template>

<script setup>
import { useMouse } from '@/utils/mouse.js';
import proxy from '@/utils/proxy.js';
proxy();
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
