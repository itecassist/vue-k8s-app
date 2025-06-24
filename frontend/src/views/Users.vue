<template>
  <div>
    <h1>Users</h1>
    <HelloWorld />
    <UserForm @userCreated="fetchUsers" />
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} — {{ user.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import UserForm from '@/components/UserForm.vue' // ✅ this path must be correct

const users = ref([])

const fetchUsers = async () => {
  const response = await axios.get('http://localhost:8080/api/users')
  users.value = response.data
}

onMounted(fetchUsers)
</script>
