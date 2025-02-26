<template>
  <div class="container-fluid mt-0">
    <h1 class="text-center my-0 mx-0 border border-dark rounded">todoodle ©</h1>
    <div class="row">
      <div class="col-md-3 mt-3 mx-1 p-0 rounded">
        <Sidebar />
      </div>
      <div class="col-md-12 mt-1">
        <EditView v-if="isEditing" :todo="selectedTodo" @closeEdit="isEditing = false" />
        <TodoList v-else @editTask="editTask" />
      </div>
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import Sidebar from "@/components/Sidebar.vue";
import EditView from "@/views/EditView.vue";

export default {
  components: {
    TodoList,
    Sidebar,
    EditView
  },
  data() {
    return {
      isEditing: false,
      selectedTodo: null
    };
  },
  methods: {
    editTask(todo) {
      this.selectedTodo = todo;
      this.isEditing = true;
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
