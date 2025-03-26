<template>
  <div class="d-flex align-items-center">
    <img 
      @click="openSearchModal" 
      class="clickable search-icon" 
      src="../components/icons/search-icon.png" 
      alt="Search"
      data-bs-toggle="modal" 
      data-bs-target="#searchModal"
    />
    <img 
      @click="openFilterModal" 
      class="clickable filter-icon ms-2" 
      src="../components/icons/filter-icon.png" 
      alt="Filter"
      data-bs-toggle="modal" 
      data-bs-target="#filterModal"
    />
    

    <!-- Search Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="searchModalLabel">Todos durchsuchen</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input v-model="searchQuery" @input="searchTodo" placeholder="Todo-Name..." class="form-control" />
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Modal -->
    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="filterModalLabel">Todos filtern</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-check mt-3">
              <button @click="$emit('toggleFinished')" class="btn btn-secondary ms-2">
              {{ showFinished ? 'Offene Todos anzeigen' : 'Erledigte anzeigen' }}
              </button>
            </div>
            <div class="form-group mt-3">
              <label for="categorySelect">Kategorie</label>
              <select class="form-control" id="categorySelect" v-model="selectedCategory">
                <option value="">Alle Kategorien</option>
                <option v-for="category in categories" :key="category.name" :value="category.name">
                  {{ category.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const emit = defineEmits(['search', 'toggleFinished', 'applyFilters']);
const searchQuery = ref('');
const showFinished = ref(false);
const selectedCategory = ref('');
const categories = ref([]);

const updateCategories = () => {
  const storedCategories = localStorage.getItem('categories');
  if (storedCategories) {
    categories.value = JSON.parse(storedCategories) || [];
  } else {
    categories.value = [];
  }
};

watchEffect(() => {
  updateCategories();
});

const searchTodo = () => {
  emit('search', searchQuery.value);
};

const openSearchModal = () => {};

const openFilterModal = () => {};

const applyFilters = () => {
  emit('applyFilters', {
    showFinished: showFinished.value,
    selectedCategory: selectedCategory.value
  });
 
  const modal = document.getElementById('filterModal');
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
};
</script>

<style scoped>
.search-icon, .filter-icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

img {
  cursor: pointer;
  transition: transform 0.2s;
}

img:hover {
  transform: scale(1.1);
}

.modal-body {
  margin: 0;
  padding-top: 0rem;
}

.form-check  {
  margin: 0;
  padding: 0; 
}
</style>
