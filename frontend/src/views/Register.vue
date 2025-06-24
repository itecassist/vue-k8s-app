<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Register</h2>
    <form @submit.prevent="register">
      <input v-model="name" placeholder="Name" class="input" required />
      <input v-model="email" placeholder="Email" class="input" required />
      <input v-model="password" type="password" placeholder="Password" class="input" required />
      <button type="submit" class="btn">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { registerUser } from '@/services/authService'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  await registerUser({ name: name.value, email: email.value, password: password.value })
  alert('Registered successfully')
  router.push('/auth/login')
}
</script>
