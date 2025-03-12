<template>
  <div class="container-fluid mt-0">
    <h1 class="text-center my-0 mx-0 border border-dark rounded">todoodle ©</h1>
    <div class="row">
      <div class="col-md-3 mt-3 mx-1 p-0 rounded">
        <Sidebar @createTask="createTask" @openEdit="editTask" @openCategoryView="openCategoryView" />
      </div>
      <div>
        <FilterBar @search="filterTodos" />
      </div>
      <div class="col-md-12 mt-1">
        <TodoCategory v-if="isCategoryView" @close="closeCategoryView" />
        <EditView v-else-if="isEditing" :todo="selectedTodo" @closeEdit="closeEdit" @updateTodo="updateTodo" />
        <CreateView v-else-if="isCreating" @closeCreate="closeCreate" @createTodo="addTodo" />
        <TodoList v-else @editTask="editTask" :todos="filteredTodos" />
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
      filteredTodos: []
    };
  },
  created() {
    this.loadTodos();
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
      this.filterTodos('');
    },
    addTodo(newTodo) {
      this.todos.push(newTodo);
      this.isCreating = false;
      this.filterTodos('');
    },
    loadTodos() {
      const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      this.todos = savedTodos;
      this.filteredTodos = savedTodos;
      console.log('Loaded todos:', this.todos);
    },
    filterTodos(searchQuery) {
      console.log('Filtering todos with query:', searchQuery);
      this.filteredTodos = this.todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('Filtered todos:', this.filteredTodos);
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
</style>
