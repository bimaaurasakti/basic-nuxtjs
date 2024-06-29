<template>
  <v-card 
    class="px-4 py-8" 
    width="400"
    title="Login"
  >
    <v-form
      v-model="form"
      @submit.prevent="onSubmit"
    >
      <v-container>
        <v-text-field
          v-model="username"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          label="Username"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
          append-icon="mdi-eye"
          @click:append="toggleShowPassword"
        ></v-text-field>

        <br>

        <v-btn
          class="mb-5"
          :disabled="!form"
          :loading="loading"
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
        >
          Login
        </v-btn>

        <p class="text-center">Don't have an account? <NuxtLink to="/register">Register</NuxtLink></p>
      </v-container>
    </v-form>
  </v-card>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'auth'
  })

  const username = ref('')
  const password = ref('')
  const auth = useAuth()
  const router = useRouter()

  let form = ref(false)
  let loading = ref(false)
  let showPassword = ref(false)

  const required = (v) => !!v || 'Field is required'
  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
  }

  const onSubmit = async () => {
    if (!form.value) return

    loading.value = true

    try {
      await auth.signIn({
        username: username.value,
        password: password.value  
      }, { redirect: false })
      router.push('/', { external: true }) // Redirect to homepage or another page
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials and try again.')
    } finally {
      loading.value = false
    }
  }
</script>