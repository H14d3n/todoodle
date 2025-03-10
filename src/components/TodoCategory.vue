<template>
    <div class="category-settings">
      <h3>Kategorien verwalten</h3>
      <form @submit.prevent="addCategory">
        <div class="mb-3">
          <input v-model="newCategory" type="text" class="form-control" placeholder="Neue Kategorie">
        </div>
        <button type="submit" class="btn btn-primary">Hinzufügen</button>
        <button type="submit" @click="$emit('close')" class="btn btn-danger ms-3">Abbrechen</button>
      </form>
      
      <ul class="list-group mt-3">
        <li v-for="(category, index) in categories" :key="index" class="list-group-item d-flex justify-content-between">
          {{ category }}
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
        categories: []
      };
    },
    created() {
      this.loadCategories();
    },
    methods: {
      addCategory() {
        if (this.newCategory.trim() === "" || this.categories.includes(this.newCategory)) return;
        this.categories.push(this.newCategory);
        this.saveCategories();
        this.newCategory = "";
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
  }
  </style>
  