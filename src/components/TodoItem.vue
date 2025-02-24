<template>
    <div class="todo-item">
      <div class="d-flex justify-content-between">
        <span>{{ todo.text }}</span>
        <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)">
          Delete
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      deleteTodo(id) {
        this.$emit("delete-todo", id);
      }
    }
  };
  </script>
  
  <style scoped>

  .todo-item {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  </style>
  