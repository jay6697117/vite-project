<template>
  <div class="todos">
    <h2>title:{{ title }}</h2>
    <div class="input">
      输入:
      <input type="text" v-model="title" @keydown.enter="addTodo" />
      &nbsp;
      <button @click="clear" v-if="dosLen">&nbsp;清理&nbsp;</button>
    </div>
    <ul class="todos-ul" v-if="todos.length > 0">
      <li class="todos-li" v-for="item in todos" :key="item.id">
        <input class="checkbox" type="checkbox" v-model="item.done" />
        <span class="title" :class="{ done: item.done }">{{ item.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div class="undo-todo">
      <span style="padding-right: 5px">已做/全部:</span>
      <span style="color: red">{{ dosLen }}/</span>
      <span style="color: red">{{ todosLen }}</span>
    </div>
    <div class="select-all">
      全选
      <input type="checkbox" v-model="allDone" />
      &nbsp;
      <span>allDone: {{ allDone }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

let title = ref('');
let todos = ref([
  { id: '1', title: '吃饭', done: false },
  { id: '2', title: '睡觉', done: true }
]);

function clear() {
  todos.value = todos.value.filter(item => !item.done);
}
function addTodo() {
  todos.value.push({ id: String(todos.value.length + 1), title: title.value, done: false });
  title.value = '';
}
//已做长度
let dosLen = computed(() => {
  return todos.value.filter(item => item.done).length;
});
//全部长度
let todosLen = computed(() => {
  return todos.value.length;
});
let allDone = computed({
  get() {
    return dosLen.value === todosLen.value; //已做 === 全部todo
  },
  set(val) {
    console.log(`alldone val:`, val);
    todos.value.forEach(element => {
      element.done = val;
    });
  }
});
</script>

/* style 标签放置 CSS 样式 */
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}

.input > * {
  height: 22px;
}

.todos-ul {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.todos-li {
  padding-top: 5px;
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.title {
  padding-left: 5px;
}
.done {
  color: #ccc;
  text-decoration: line-through;
}

.undo-todo {
  width: 200px;
  margin: 0 auto;
  padding-top: 5px;
  text-align: left;
}
.select-all {
  width: 200px;
  margin: 0 auto;
  padding-top: 5px;
  text-align: left;
}
</style>
