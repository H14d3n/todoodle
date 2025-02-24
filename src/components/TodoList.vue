<template>
    <div class="todo-list">
      <div v-for="todo in todos" :key="todo.id" class="todo-item mb-3 d-flex align-items-center justify-content-between">
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
          { id: 1, title: "Erstellen von Todoodle", description: "Vuejs & Bootstrap" },
          { id: 2, title: "Aufgaben in JSON Format abspeichern", description: "Titel ist selbsterklärend 😂" },
          { id: 3, title: "Andere Funktionalitäten", description: "Implementieren von Filter, Kategorien und vieles mehr." }
        ]
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .todo-item {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    width: 100%; 
  }
  </style>
  