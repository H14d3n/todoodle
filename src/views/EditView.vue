<template>
  <div class="container mt-4 border p-3">
    <h2>Task bearbeiten</h2>
    <form @submit.prevent="saveTask">
      <div class="mb-3">
        <label class="form-label">Titel</label>
        <input v-model="editedTodo.title" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Kategorie</label>
        <select v-model="editedTodo.category" class="form-control">
          <option value="">Keine Kategorie</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Beschreibung</label>
        <textarea v-model="editedTodo.description" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-success">Speichern</button>
      <button type="button" @click="$emit('closeEdit')" class="btn btn-danger ms-2">Abbrechen</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  data() {
    return {
      editedTodo: { ...this.todo },
      categories: []
    };
  },
  created() {
    this.loadCategories();
  },
  methods: {
    saveTask() {
      const updatedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const index = updatedTodos.findIndex(todo => todo.id === this.editedTodo.id);
      if (index !== -1) {
        updatedTodos[index] = this.editedTodo;
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
      this.$emit("updateTodo", this.editedTodo);
    },
    loadCategories() {
      this.categories = JSON.parse(localStorage.getItem("categories")) || [];
    }
  }
};
</script>
