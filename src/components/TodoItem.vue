<template>
  <div class="d-flex justify-content-between align-items-center w-100 rounded-bottom">
    <div class="todo-title">
      <h5>{{ todo.title }}</h5>
      <p v-if="todo.category" class="badge bg-secondary">{{ todo.category }}</p>
      <p v-if="todo.dueDate" class="text-muted"><strong>Fälligkeitsdatum:</strong> {{ todo.dueDate }}</p>
      <hr>
      <p>{{ todo.description }}</p>
      <button @click="$emit('edit', todo)" class="btn btn-primary btn-sm">✏️</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  }
};
</script>

<style scoped>
.todo-title {
  flex-grow: 1;
}
h5 {
  font-weight: 550;
}
.text-muted {
  font-size: 0.9rem;
}
</style>
