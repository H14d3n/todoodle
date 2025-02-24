<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Todoodle</h1>
      <div class="row">
        <div class="col-md-3">
            <Sidebar />
        </div>
        <div class="col-md-20">
          <TodoList />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TodoList from "@/components/TodoList.vue"; 
  import Sidebar from "@/components/Sidebar.vue"; // Waiting to be implemented
  import FilterBar from "@/components/FilterBar.vue"; // Waiting to be implemented
  
  export default {
    components: {
      TodoList,
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  </style>
  