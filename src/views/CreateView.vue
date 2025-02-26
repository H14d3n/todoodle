<template>
    <div class="container mt-4 border p-3">
      <h2>Task erstellen</h2>
      <form @submit.prevent="saveTask">
        <div class="mb-3">
          <label class="form-label">Titel</label>
          <input v-model="newTodo.title" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Beschreibung</label>
          <textarea v-model="newTodo.description" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Speichern</button>
        <button type="button" @click="$emit('closeCreate')" class="btn btn-secondary ms-2">Abbrechen</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: {
          title: '',
          description: ''
        }
      };
    },
    methods: {
      saveTask() {
        const newTodo = { ...this.newTodo, id: Date.now() };
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
        this.$emit('createTodo', newTodo);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
    border-color: black;
  }
  </style>
  