<template>
  <div v-if="todos.length" class="container mt-6">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-4 mb-3" v-for="todo in todos" :key="todo.id">
        <div class="card h-100">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ todo.title }}</h5>
            <span class="badge" :style="{ backgroundColor: todo.category.color }">{{ todo.category.name }}</span>
            <p v-if="todo.dueDate" class="text-muted date"> {{ formatDueDate(todo.dueDate) }}</p>
            <hr>
            <p class="card-text">{{ todo.description }}</p>
            <div class="mt-auto d-flex justify-content-between">
              <button v-if="!todo.finished" class="btn btn-success" @click="$emit('markDone', todo)">✓</button>
              <button v-else class="btn btn-warning" @click="$emit('reopenTask', todo)">⟲</button>
              <button class="btn btn-primary" @click="$emit('editTask', todo)">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p v-else class="text-muted">Keine Todos gefunden!</p>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDueDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-muted {
  margin-top: 100px;
  font-size: large;
  text-align: center;
}

.mt-6 {
  margin-top: 4.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.badge {
  font-size: 0.75rem;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.btn-primary {
  align-self: flex-end;
  margin-top: auto;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.date {
  font-size: 0.575rem;
  margin: 0;
}

@media (max-width: 576px) {
  .card-title {
    font-size: 1rem;
  }

  .badge {
    font-size: 0.65rem;
  }

  .card-text {
    font-size: 0.875rem;
  }

  .btn-primary {
    font-size: 0.875rem;
  }
}
</style>
