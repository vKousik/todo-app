<template>
  <el-container style="max-width:600px; width:100%; margin:0 auto;">
    <el-header>
      <h2 class="title">Micro-Frontend To-Do</h2>
    </el-header>
    <el-main>
      <TodoList />
    </el-main>
  </el-container>
</template>

<script setup>
import TodoList from './components/TodoList.vue'
</script>

<style>
body {
  margin: 0;
  background: #0f172a;
  font-family: "Inter", sans-serif;
  color: #f1f5f9;
}

.title {
  color: #f1f5f9;
}

/* Input Dark */
.el-input__wrapper {
  background: #0f172a !important;
  border: 1px solid #334155 !important;
  border-radius: 8px !important;
}

.el-input__wrapper.is-focus {
  border-color: #6366f1 !important;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}

/* Checkbox text */
.el-checkbox__label {
  color: #f1f5f9 !important;
}
</style>