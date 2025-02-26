import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, title: "Erstellen von Todoodle", description: "Vue.js & Bootstrap" },
      { id: 2, title: "Aufgaben in JSON abspeichern", description: "Titel ist selbsterklärend 😂" },
      { id: 3, title: "Andere Funktionalitäten", description: "Filter, Kategorien & mehr" }
    ]
  }),

  actions: {
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },

    updateTodo(updatedTodo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.todos[index] = updatedTodo;
        this.saveToLocalStorage();
      }
    }
  }
});
