<template>
  <div class="container rounded">
    <div class="image-container">
      <img @click="openCreateView" src="./icons/plus.png" alt="Add" class="clickable">
      <img @click="openSettings" class="mt-3 clickable" src="https://static-00.iconduck.com/assets.00/settings-icon-512x512-36g7k9iw.png" alt="Settings">
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits();

const openCreateView = () => {
  emit('createTask');
};

const openSettings = () => {
  // Handle settings logic
};
</script>

<style scoped>
.image-container img {
  width: 60px;
  scale: unset;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s
}

.clickable:hover {
  transform: scale(1.060);
}

.container {
  margin: 0 2rem 0 6rem;
}
</style>
