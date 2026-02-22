<template>
  <el-card class="todo-card" style="margin-bottom:20px;">
    <div style="display:flex;justify-content:space-between;align-items:center;">

      <div v-if="!editing">
        <el-checkbox
          :model-value="todo.done"
          @change="store.toggleTask(todo.id)"
        >
          <span :class="{ done: todo.done }">
            {{ todo.text }}
          </span>
        </el-checkbox>
      </div>

      <div v-else>
        <el-input v-model="editedText" size="small" @keyup.enter="update"/>
      </div>

      <div>
        <el-button size="small" @click="toggleEdit">
          {{ editing ? 'Cancel' : 'Edit' }}
        </el-button>

        <el-button
          v-if="editing"
          size="small"
          type="success"
          @click="update"
        >
          Save
        </el-button>

        <el-button
          size="small"
          type="danger"
          @click="store.deleteTask(todo.id)"
        >
          Delete
        </el-button>
      </div>

    </div>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const props = defineProps({ todo: Object })
const store = useTodoStore()

const editing = ref(false)
const editedText = ref(props.todo.text)

const toggleEdit = () => {
  editing.value = !editing.value
  editedText.value = props.todo.text
}

const update = () => {
  if (editedText.value.trim()) {
    store.updateTask(props.todo.id, editedText.value)
    editing.value = false
  }
}
</script>

<style scoped>
.todo-card {
  background: #1e293b !important;
  border: 1px solid #334155 !important;
  border-radius: 10px;
}

span {
  color: #f1f5f9;
}

.done {
  color: #94a3b8;
  text-decoration: line-through;
}
</style>