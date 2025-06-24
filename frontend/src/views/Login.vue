<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '@/services/authService'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = async () => {
  const token = await loginUser({ email: email.value, password: password.value })
  localStorage.setItem('token', token)
  alert('Logged in successfully')
  router.push('/users')
}
</script>
