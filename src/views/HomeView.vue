<template>
  <div class="container-fluid mt-0">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1 class="text-center my-0 mx-0 border border-dark rounded p-2">todoodle ©</h1>
      <FilterBar @search="filterTodos" @toggleFinished="toggleShowFinished" @openFilterModal="openFilterModal" />
    </div>

    <div class="row">
      <div class="col-md-2 mt-3 mx-1 p-0 rounded"> 
        <Sidebar @createTask="createTask" @openEdit="editTask" @openCategoryView="openCategoryView" />
      </div>

      <div class="col-md-9 mt-1">
        <div class="row">
          <TodoCategory v-if="isCategoryView" @close="closeCategoryView" />
          <EditView v-else-if="isEditing" :todo="selectedTodo" @closeEdit="closeEdit" @updateTodo="updateTodo" />
          <CreateView v-else-if="isCreating" @closeCreate="closeCreate" @createTodo="addTodo" />

          <div v-else class="row">
            <TodoList 
              @editTask="editTask" 
              @markDone="markDone" 
              @reopenTask="reopenTask"
              :todos="filteredTodos"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Filter Modal -->
    <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="filterModalLabel">Filter</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <label class="form-label">Kategorie:</label>
            <select v-model="selectedCategory" class="form-select">
              <option value="">Alle</option>
              <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
            </select>

            <div class="form-check mt-2">
              <input class="form-check-input" type="checkbox" v-model="showFinished" id="showFinished">
              <label class="form-check-label" for="showFinished">Erledigte anzeigen</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schliessen</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import Sidebar from "@/components/Sidebar.vue";
import EditView from "@/views/EditView.vue";
import CreateView from "@/views/CreateView.vue";
import TodoCategory from "@/components/TodoCategory.vue";
import FilterBar from "@/components/FilterBar.vue";

export default {
  components: {
    TodoList,
    Sidebar,
    EditView,
    CreateView,
    TodoCategory,
    FilterBar
  },
  data() {
    return {
      isEditing: false,
      isCreating: false,
      isCategoryView: false,
      selectedTodo: null,
      todos: [],
      finishedTodos: [],
      selectedCategory: "",
      showFinished: false,
      searchQuery: ""
    };
  },
  created() {
    this.loadTodos();
  },
  computed: {
    filteredTodos() {
      let allTasks = this.showFinished ? this.finishedTodos : this.todos;
      
      if (this.selectedCategory) {
        allTasks = allTasks.filter(todo => todo.category === this.selectedCategory);
      }
      
      if (this.searchQuery) {
        allTasks = allTasks.filter(todo => todo.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }
      
      return allTasks;
    },
    categories() {
      return [...new Set([...this.todos, ...this.finishedTodos].map(todo => todo.category))];
    }
  },
  methods: {
    editTask(todo) {
      this.selectedTodo = { ...todo };
      this.isEditing = true;
      this.isCategoryView = false;
      this.isCreating = false;
    },
    createTask() {
      this.isCreating = true;
      this.isCategoryView = false;
      this.isEditing = false;
    },
    openCategoryView() {
      this.isCategoryView = true;
      this.isEditing = false;
      this.isCreating = false;
    },
    closeCreate() {
      this.isCreating = false;
      this.loadTodos();
    },
    closeEdit() {
      this.isEditing = false;
      this.loadTodos();
    },
    closeCategoryView() {
      this.isCategoryView = false;
      this.loadTodos();
    },
    updateTodo(updatedTodo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
      this.isEditing = false;
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
      this.isCreating = false;
    },
    loadTodos() {
      this.todos = JSON.parse(localStorage.getItem("todos")) || [];
      this.finishedTodos = JSON.parse(localStorage.getItem("finishedTodos")) || [];
    },
    markDone(todo) {
      this.todos = this.todos.filter(t => t.id !== todo.id);
      todo.finished = true;
      this.finishedTodos.push(todo);
      this.saveTasks();
    },
    reopenTask(todo) {
      this.finishedTodos = this.finishedTodos.filter(t => t.id !== todo.id);
      todo.finished = false;
      this.todos.push(todo);
      this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("finishedTodos", JSON.stringify(this.finishedTodos));
    },
    toggleShowFinished() {
      this.showFinished = !this.showFinished;
    },
    filterTodos(query) {
      this.searchQuery = query;
    },
    openFilterModal() {
      const modal = new bootstrap.Modal(document.getElementById('filterModal'));
      modal.show();
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  background-color: rgb(77, 80, 119);
  color: white;
}

.container-fluid {
  margin-left: 0px;
  margin-right: 50px;
}

.card-title {
  font-size: 1.25rem;
}

.card-text {
  font-size: 1rem;
}

.card {
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-body button {
  align-self: flex-end;
}
</style>
