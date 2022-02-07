<template>
  <div class="about">
    <Count />
    <button @click="handleUpdate">更新</button>
    <button @click="handleReset">重置</button>
    <hr />
    <!-- <Rate :rate="rate" :color="color" @updateRate="updateRate" /> -->
    <Rate v-model:rate="rate" :color="color">
      <template v-slot:header>
        <img width="40" src="/favicon.ico" />
        <div class="rate-slot">我的课程评分:{{ rate }}</div>
      </template>
    </Rate>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import Count from '@/components/Count.vue';
import Rate from '@/components/Rate.vue';
import useFavicon from '@/utils/useFavicon.js';
let { reset, favicon } = useFavicon();
let rate = ref(3.5);
let color = ref('blue');

function handleUpdate() {
  favicon.value = '/runoob.ico';
}
function handleReset() {
  reset();
}
// function updateRate(val) {
//   rate.value = val;
// }
onMounted(() => {
  console.log('getCurrentInstance() :>> ', getCurrentInstance());
});
</script>

<style lang="scss" scoped>
.about {
  button {
    width: 40px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  button:last-child {
    margin-right: 0;
  }

  .rate-slot {
    padding: 10px 0;
    background-color: lightblue;
  }
}
</style>
