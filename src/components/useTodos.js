import { ref, computed } from 'vue';

export default function useTodos() {
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

  return { title, todos, clear, addTodo, dosLen, todosLen, allDone };
}