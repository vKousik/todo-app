<template>
  <div>
    <el-input
      v-model="newTask"
      placeholder="Add a task..."
      @keyup.enter="add"
    >
      <template #append>
        <el-button class="primary-btn" @click="add">
          Add
        </el-button>
      </template>
    </el-input>

    <div style="margin-top:20px;">
      <TodoItems
        v-for="todo in store.todos"
        :key="todo.id"
        :todo="todo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'
import TodoItems from './TodoItems.vue'

const store = useTodoStore()
const newTask = ref('')

const add = () => {
  if (newTask.value.trim()) {
    store.addTask(newTask.value)
    newTask.value = ''
  }
}
</script>

<style scoped>
.primary-btn {
  background-color: #6366f1 !important;
  border-color: #6366f1 !important;
  color: white !important;
}

.primary-btn:hover {
  background-color: #4f46e5 !important;
}
</style>