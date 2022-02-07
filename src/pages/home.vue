<template>
  <div class="home">
    <img width="60" height="60" alt="Vue logo" src="@/assets/logo.png" />
    <Todolist />
  </div>
</template>

<script setup>
import Todolist from '@/components/Todolist.vue';
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
</style>
