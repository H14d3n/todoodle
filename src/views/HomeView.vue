<template>
    <div class="container-fluid mt-5 ml-5">
      <h1 class="text-center ms-2 mb-5 mx-2 border border-dark rounded">todoodle ©</h1>
      <div class="row">
        <div class="col-md-5">
            <Sidebar />
        </div>
      </div>
    </div>
    <div class="col-md-15 ms-5 align-middle d-inline-flex p-2">
          <TodoList />
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

   h1 {
    font-size: 30px;
    background-color: rgb(77, 80, 119);
    color: white;
   } 

  .container-fluid {
    margin-left: 50px;
    margin-right: 50px;
  }
  </style>
  