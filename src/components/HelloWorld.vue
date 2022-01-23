<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
  msg: {
    type: String,
    default: ''
  }
});
const count = ref(0);
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
</style>
