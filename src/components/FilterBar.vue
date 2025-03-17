<template>
    <div>
        <img @click="openModal" class="mt-3 clickable" src="../components/icons/search-icon.png" alt="Search" data-bs-toggle="modal" data-bs-target="#searchModal" />
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

const emit = defineEmits(['search']);
const searchQuery = ref('');

const searchTodo = () => {
    emit('search', searchQuery.value);
};

const openModal = () => {
};
</script>

<style>
.mt-3 {
    margin-top: 1rem;
}

.clickable {
    cursor: pointer;
}

img {
    width: 60px;
    height: auto;
    transition: transform 0.2s;
}

img:hover {
    transform: scale(1.060);
}
</style>