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

    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="filterModalLabel">Todos filtern</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <button @click="toggleFinished" class="btn btn-secondary w-100 mb-3">
                {{ showFinished ? 'Offene Todos anzeigen' : 'Erledigte anzeigen' }}
            </button>
            <div class="form-group">
              <label for="categorySelect">Kategorie</label>
              <select class="form-control" id="categorySelect" v-model="selectedCategory" @change="applyFilters">
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
import { ref, watch, onMounted } from 'vue';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const emit = defineEmits(['search', 'toggleFinished', 'applyFilters']);
const searchQuery = ref('');
const showFinished = ref(false);
const selectedCategory = ref('');
const categories = ref([]);

const updateCategories = () => {
  const storedCategories = localStorage.getItem('categories');
  categories.value = storedCategories ? JSON.parse(storedCategories) : [];
};

onMounted(() => {
  updateCategories();
});

watch([showFinished, selectedCategory], () => {
  applyFilters();
});

const searchTodo = () => {
  emit('search', searchQuery.value);
};

const toggleFinished = () => {
  showFinished.value = !showFinished.value;
  emit('toggleFinished', showFinished.value);
};

const applyFilters = () => {
  emit('applyFilters', {
    showFinished: showFinished.value,
    selectedCategory: selectedCategory.value,
  });

  const modal = document.getElementById('filterModal');
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  if (bootstrapModal) {
    bootstrapModal.hide();
  }
};

window.addEventListener('storage', (event) => {
  if (event.key === 'categories') {
    updateCategories();
  }
});
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
</style>
