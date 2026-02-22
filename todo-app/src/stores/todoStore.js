import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || []
  }),

  actions: {
    save() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },

    addTask(text) {
      this.todos.push({
        id: Date.now(),
        text,
        done: false
      })
      this.save()
    },

    toggleTask(id) {
      const task = this.todos.find(t => t.id === id)
      if (task) task.done = !task.done
      this.save()
    },

    deleteTask(id) {
      this.todos = this.todos.filter(t => t.id !== id)
      this.save()
    },

    updateTask(id, newText) {
      const task = this.todos.find(t => t.id === id)
      if (task) task.text = newText
      this.save()
    }
  }
})