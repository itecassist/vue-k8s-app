<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text" placeholder="Name" required />
    <input v-model="email" type="email" placeholder="Email" required />
    <button type="submit">Create User</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')

const emit = defineEmits(['userCreated'])

const submitForm = async () => {
  try {
    await axios.post('http://localhost:8080/api/users', {
      name: name.value,
      email: email.value,
    })

    alert('User created')

    // Clear the form
    name.value = ''
    email.value = ''

    // Emit event to parent
    emit('userCreated')
  } catch (error) {
    alert('Failed to create user')
    console.error(error)
  }
}
</script>
