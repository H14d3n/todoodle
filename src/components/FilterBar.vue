<template>
    <div>
        <img @click="openModal" class="mt-3 clickable" src="../components/icons/search-icon.png" alt="Search" data-bs-toggle="modal" data-bs-target="#searchModal" />

        <!-- Modal -->
        <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="searchModalLabel">Search Todos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input v-model="searchQuery" @input="searchTodo" placeholder="Search todos..." class="form-control" />
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
    // This function is just to handle the click event on the search icon
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
</style>