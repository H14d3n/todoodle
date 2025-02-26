<template>
    <div v-if="todos.length" class="container-xxl mt-6">
      <row>
        <div v-for="todo in todos" :key="todo.id" class="col-mb-4 mb-3">
          <TodoItem :todo="todo" class="todo-item" />
        </div>
      </row>
    </div>
    <p v-else class="text-muted">Keine Todos gefunden! Bitte erstelle ein Neues!</p>
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
          { id: 3, title: "Andere Funktionalitäten", description: "Implementieren von Filter, Kategorien und vieles mehr." },
          { id: 4, title: "Erstellen von Todoodle", description: "Vuejs & Bootstrap" },
          { id: 5, title: "Aufgaben in JSON Format abspeichern", description: "Titel ist selbsterklärend 😂" },
          { id: 6, title: "Andere Funktionalitäten", description: "Implementieren von Filter, Kategorien und vieles mehr." }
        ]
      };
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .todo-item {
    background-color: #98b0da;
    border-color: #485971;
    padding: 15px;
    border-radius: 10px;
    width: 100%; 
  }

  .container-xxl {
    display: grid;
  }

  .text-muted {
    margin-top: 100px;
    font-size: large;
  }

  .mt-6 {
    margin-top: 4.5rem;
  }
  </style>
  