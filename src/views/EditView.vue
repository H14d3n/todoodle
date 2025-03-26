<template>
  <div class="container mt-4 border p-3">
    <h2>Task bearbeiten</h2>
    <form @submit.prevent="saveTask">
      <div class="mb-3">
        <label class="form-label">Titel</label>
        <input v-model="editedTodo.title" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Fälligkeitsdatum</label>
        <input v-model="editedTodo.dueDate" type="date" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Kategorie</label>
        <select v-model="editedTodo.category.name" class="form-control">
          <option value="">Keine Kategorie</option>
          <option v-for="category in categories" :key="category.name" :value="category.name">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Beschreibung</label>
        <textarea v-model="editedTodo.description" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-success" :disabled="!isValid">Speichern</button>
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
      editedTodo: { ...this.todo, category: { ...this.todo.category } },
      categories: []
    };
  },
  computed: {
    isValid() {
      return this.editedTodo.title.trim() !== "" && this.editedTodo.description.trim() !== "";
    }
  },
  created() {
    this.loadCategories();
  },
  watch: {
    'editedTodo.category.name': function(newVal) {
      const category = this.categories.find(cat => cat.name === newVal);
      if (category) {
        this.editedTodo.category.color = category.color;
      }
    }
  },
  methods: {
    saveTask() {
      if (!this.isValid) {
        alert("Titel und Beschreibung dürfen nicht leer sein!");
        return;
      }
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
