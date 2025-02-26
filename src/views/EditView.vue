<template>
    <div class="container mt-4 border p-3">
      <h2>Task bearbeiten</h2>
      <form @submit.prevent="saveTask">
        <div class="mb-3">
          <label class="form-label">Titel</label>
          <input v-model="todo.title" type="text" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Beschreibung</label>
          <textarea v-model="todo.description" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-success">Speichern</button>
        <button type="button" @click="$emit('closeEdit')" class="btn btn-secondary ms-2">Abbrechen</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      todo: Object
    },
    methods: {
      saveTask() {
        console.log("Task gespeichert", this.todo);
        this.$emit("closeEdit");
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
  