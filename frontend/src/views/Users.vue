<template>
  <div>
    <h1>Users</h1>
    <button @click="logout" class="btn bg-red-600">Logout</button>
    <HelloWorld />
    <UserForm @userCreated="fetchUsers" />
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} — {{ user.username }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '../services/axios'
import { useRouter } from 'vue-router'
import UserForm from '@/components/UserForm.vue' // ✅ this path must be correct
const router = useRouter()

const logout = () => {
  localStorage.removeItem('token')
  router.push('/auth/login')
}
const users = ref([])

const fetchUsers = async () => {
  const response = await axios.get('http://localhost:8080/api/users')
  users.value = response.data.content
}

onMounted(fetchUsers)
</script>
