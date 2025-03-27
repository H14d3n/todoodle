<template>
  <div class="container mt-4 border p-3">
    <h2>Task erstellen</h2>
    <form @submit.prevent="saveTask">
      <div class="mb-3">
        <label class="form-label">Titel</label>
        <input v-model="newTodo.title" type="text" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Fälligkeitsdatum</label>
        <input v-model="newTodo.dueDate" type="date" class="form-control">
      </div>
      <div class="mb-3">
        <label class="form-label">Kategorie</label>
        <select v-model="newTodo.category.name" class="form-control">
          <option value="">Keine Kategorie</option>
          <option v-for="category in categories" :key="category.name" :value="category.name">
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label class="form-label">Beschreibung</label>
        <textarea v-model="newTodo.description" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-success" :disabled="!isValid">Speichern</button>
      <button type="button" @click="$emit('closeCreate')" class="btn btn-danger ms-2">Abbrechen</button>
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
        category: { name: "", color: "" },
        dueDate: ""
      },
      categories: []
    };
  },
  computed: {
    isValid() {
      return this.newTodo.title.trim() !== "" && this.newTodo.description.trim() !== "";
    }
  },
  created() {
    this.loadCategories();
  },
  watch: {
    'newTodo.category.name': function(newVal) {
      const category = this.categories.find(cat => cat.name === newVal);
      if (category) {
        this.newTodo.category.color = category.color;
      }
    }
  },
  methods: {
    saveTask() {
      if (!this.isValid) {
        alert("Titel und Beschreibung dürfen nicht leer sein!");
        return;
      }
      if (!this.newTodo.category.name) {
        alert("Bitte eine Kategorie auswählen!");
        return;
      }
      const newTodo = { ...this.newTodo, id: Date.now(), finished: false };
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
