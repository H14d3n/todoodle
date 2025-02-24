<template>
    <div class="todo-list">
      <div v-for="todo in todos" :key="todo.id" class="todo-item mb-3">
        <TodoItem :todo="todo" />
      </div>
    </div>
  </template>
  
  <script>
  import TodoItem from "@/components/TodoItem.vue"; 
  
  export default {
    components: {
      TodoItem
    },
    data() {
      return {
        todos: [
          { id: 1, text: "Test" },
          { id: 2, text: "Test" },
          { id: 3, text: "Test" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .todo-item {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
  }
  </style>
  