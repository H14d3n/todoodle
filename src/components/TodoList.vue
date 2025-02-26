<template>
  <div v-if="todos.length" class="container-xxl mt-6">
    <div class="row">
      <div v-for="todo in todos" :key="todo.id" class="col-mb-4 mb-3">
        <TodoItem :todo="todo" class="todo-item" @edit="editTask(todo)" />
      </div>
    </div>
  </div>
  <p v-else class="text-muted">Keine Todos gefunden! Bitte erstelle ein Neues!</p>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return JSON.parse(localStorage.getItem('todos')) || [];
    }
  },
  methods: {
    editTask(todo) {
      this.$emit("editTask", todo);
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
</style>
