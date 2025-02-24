<template>
    <div class="d-flex justify-content-between align-items-center w-100 rounded-bottom" >
      <div class="todo-title">
        <h5>{{ todo.title }}</h5>
        <hr>
        <p>{{ todo.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .todo-title {
    flex-grow: 1; 
  }
  </style>
  