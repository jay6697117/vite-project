<template>
  <div class="todos">
    <transition name="modal">
      <div class="modal-wrap" v-show="showModal"><div class="modal">哥, 你啥也没输入！</div></div>
    </transition>

    <h2>title:{{ title }}</h2>
    <div class="input">
      输入:
      <input type="text" v-model="title" @keydown.enter="addTodo" />
      &nbsp;
      <button @click="clear" v-if="dosLen">&nbsp;清理&nbsp;</button>
    </div>
    <div class="todos-ul" v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li class="todos-li" v-for="item in todos" :key="item.id">
          <input class="checkbox" type="checkbox" v-model="item.done" />
          <span class="title" :class="{ done: item.done }">{{ item.title }}</span>
        </li>
      </transition-group>
    </div>
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
    <div style="padding: 10px 0">
      <button style="padding: 2px 8px" @click="shuffle">洗牌</button>
    </div>
  </div>
</template>

<script setup>
import useTodos from '@/utils/useTodos';
let { shuffle, showModal, title, todos, clear, addTodo, dosLen, todosLen, allDone } = useTodos();
</script>

<style lang="scss" scoped>
.todos {
  .modal-wrap {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    .modal {
      padding: 20px;
      width: 300px;
      height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      color: white;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  // 动画:start
  .modal-enter-active,
  .modal-leave-active {
    transition: all 1s ease;
  }
  .modal-enter-to,
  .modal-leave-from {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
    transform: translate(-50%, -400px);
  }
  // 动画:end
  .input > * {
    height: 22px;
  }
  .todos-ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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
    .flip-list-move {
      transition: transform 2s ease;
    }
    .flip-list-enter-active,
    .flip-list-leave-active {
      transition: all 10s ease;
    }
    .flip-list-enter-to,
    .flip-list-leave-from {
      opacity: 1;
      transform: translateX(0);
    }
    .flip-list-enter-from,
    .flip-list-leave-to {
      opacity: 0;
      transform: translateX(100px);
    }
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
}
</style>
