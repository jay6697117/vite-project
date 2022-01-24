<template>
  <Count />
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
import Count from '@/components/Count.vue';

onMounted(() => {
  console.log('getCurrentInstance() :>> ', getCurrentInstance());
});
</script>

<style lang="scss" scoped></style>
