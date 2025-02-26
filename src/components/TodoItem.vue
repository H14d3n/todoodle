<template>
  <div class="d-flex justify-content-between align-items-center w-100 rounded-bottom">
    <div class="todo-title">
      <h5>{{ todo.title }}</h5>
      <hr>
      <p>{{ todo.description }}</p>
      <button @click="$emit('edit', todo)" class="btn btn-primary">🖉</button>
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
</style>
