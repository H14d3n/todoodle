<template>
  <div v-if="todos.length" class="container-xxl mt-6">
    <div class="row">
      <div class="col-md-4 mb-3" v-for="todo in todos" :key="todo.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ todo.title }}</h5>
            <span class="badge badge-secondary">{{ todo.category }}</span>
            <hr>
            <p class="card-text">{{ todo.description }}</p>
            <button class="btn btn-primary" @click="$emit('editTask', todo)">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else class="text-muted">Keine Todos gefunden! Bitte erstelle ein Neues!</p>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.todo-item {
  background-color: #98b0da;
  border-color: #485971;
  padding: 15px;
  border-radius: 10px;
  width: 100%;
}

.container-xxl {
  display: flex;
}

.text-muted {
  margin-top: 100px;
  font-size: large;
}

.mt-6 {
  margin-top: 4.5rem;
}

.card {
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  background-color: #6c757d;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.card-body button {
  align-self: flex-end;
}
</style>
