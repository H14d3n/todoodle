<template>
    <div class="container-fluid mt-0">
      <h1 class="text-center my-0 mx-0 border border-dark rounded">todoodle ©</h1>
      <div class="bg-light mt-3 mx-1 rounded">
        <div class="col-md-5">
            <Sidebar />
        </div>
      </div>
    </div>
    <div class="col-md-9">
          <TodoList />
    </div>
  </template>
  
  <script>
  import TodoList from "@/components/TodoList.vue"; 
  import Sidebar from "@/components/Sidebar.vue";
  import FilterBar from "@/components/FilterBar.vue"; // Waiting to be implemented

  
  export default {
    components: {
      TodoList,
      Sidebar
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
  