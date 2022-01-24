<template>
  <HelloWorld msg="About页面" />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

onMounted(() => {
  console.log('getCurrentInstance() :>> ', getCurrentInstance());
});
</script>

<style lang="scss" scoped></style>
