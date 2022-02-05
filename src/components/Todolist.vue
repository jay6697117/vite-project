<template>
  <div class="todos">
    <transition name="modal" class="modal1111">
      <div class="modal-wrap" v-show="showModal"><div class="modal">哥，你啥也没输入!</div></div>
    </transition>

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
import useTodos from '@/utils/useTodos';
let { showModal, title, todos, clear, addTodo, dosLen, todosLen, allDone } = useTodos();
</script>

/* style 标签放置 CSS 样式 */
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
      background: rgba(0, 0, 0, 0.3);
    }
  }

  // 动画:start
  .modal-wrap.modal-enter-active,
  .modal-wrap.modal-leave-active {
    transition: all 1.5s ease;
  }

  .modal-wrap.modal-enter-to,
  .modal-wrap.modal-leave-from {
    opacity: 1;
    transform: translate(-50%, 0);
  }

  .modal-wrap.modal-enter-from {
    opacity: 0;
    transform: translate(-50%, -200px);
  }

  .modal-wrap.modal-leave-to {
    opacity: 0;
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
}
</style>
