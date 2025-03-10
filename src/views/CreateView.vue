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
      <div class="mb-3">
        <label class="form-label">Kategorie</label>
        <select v-model="newTodo.category" class="form-control">
          <option value="">Keine Kategorie</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
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
        title: "",
        description: "",
        category: ""
      },
      categories: []
    };
  },
  created() {
    this.loadCategories();
  },
  methods: {
    saveTask() {
      const newTodo = { ...this.newTodo, id: Date.now() };
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(todos));
      this.$emit("createTodo", newTodo);
    },
    loadCategories() {
      this.categories = JSON.parse(localStorage.getItem("categories")) || [];
    }
  }
};
</script>
