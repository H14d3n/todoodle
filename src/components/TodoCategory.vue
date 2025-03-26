<template>
    <div class="category-settings">
      <h3>Kategorien verwalten</h3>
      <form @submit.prevent="addCategory">
        <div class="mb-3">
          <input v-model="newCategory" type="text" class="form-control" placeholder="Neue Kategorie">
        </div>
        <label class="mt-0" for="color">Farbe:</label>
        <div class="mb-3 color-picker">
          <input v-model="newCategoryColor" type="color" class="form-control" placeholder="Farbe auswählen">
        </div>
        <button type="submit" class="btn btn-primary">Hinzufügen</button>
        <button type="submit" @click="$emit('close')" class="btn btn-danger ms-3">Abbrechen</button>
      </form>
      
      <ul class="list-group mt-3">
        <li v-for="(category, index) in categories" :key="index" class="list-group-item d-flex justify-content-between">
          <span>{{ category.name }}</span>
          <button @click="removeCategory(index)" class="btn btn-danger btn-sm">⨉</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newCategory: "",
        newCategoryColor: "#ffffff",
        categories: []
      };
    },
    created() {
      this.loadCategories();
    },
    methods: {
      addCategory() {
        if (this.newCategory.trim() === "" || this.categories.some(cat => cat.name === this.newCategory)) return;
        this.categories.push({ name: this.newCategory, color: this.newCategoryColor });
        this.saveCategories();
        this.newCategory = "";
        this.newCategoryColor = "#ffffff";
      },
      removeCategory(index) {
        this.categories.splice(index, 1);
        this.saveCategories();
      },
      saveCategories() {
        localStorage.setItem("categories", JSON.stringify(this.categories));
      },
      loadCategories() {
        this.categories = JSON.parse(localStorage.getItem("categories")) || [];
      }
    }
  };
  </script>
  
  <style scoped>
  .category-settings {
    max-width: 400px;
    margin: auto;
    margin-top: 1.7rem;
    padding: 1rem;
    border: 1px solid #ddd;
  }

  .color-picker {
    display: flex;
    width: 20%;
    margin: 0.2rem 0 0.2rem 0;
  }
  </style>
