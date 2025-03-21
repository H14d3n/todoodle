<template>
    <div class="d-flex align-items-center">
      <img 
        @click="openModal" 
        class="clickable search-icon" 
        src="../components/icons/search-icon.png" 
        alt="Search"
        data-bs-toggle="modal" 
        data-bs-target="#searchModal"
      />
      <button @click="$emit('toggleFinished')" class="btn btn-secondary ms-2">
        {{ showFinished ? 'Offene Todos anzeigen' : 'Erledigte anzeigen' }}
      </button>
  
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
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['search', 'toggleFinished']);
  const searchQuery = ref('');
  const showFinished = ref(false);
  
  const searchTodo = () => {
    emit('search', searchQuery.value);
  };
  
  const openModal = () => {};
  </script>
  
  <style scoped>
  .search-icon {
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
  