<template>
  <v-card
    class="px-4 py-8"
    width="400"
    title="Registration"
  >
    <v-form
      v-model="form"
      @submit.prevent="onSubmit"
    >
      <v-container>
        <v-text-field
          v-model="username"
          :rules="[required]"
          color="primary" 
          label="Username"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="email"
          type="email"  
          color="primary"
          label="Email"
          variant="underlined"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :rules="[required]"
          type="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
        ></v-text-field>

        <v-checkbox
          v-model="terms"
          color="secondary"
          label="I agree to site terms and conditions"
        ></v-checkbox>

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
          Register
        </v-btn>

        <p class="text-center">Already have an account? <NuxtLink to="/login">Login</NuxtLink></p>
      </v-container>
    </v-form> 
  </v-card>
</template>

<script setup>
  definePageMeta({
    layout: 'auth'
  })

  const username = ref('')
  const email = ref('')
  const password = ref('')
  const terms = ref(false)
  const form = ref(true)
  const loading = ref(false)
  const auth = useAuth()
  const router = useRouter()

  const required = (v) => !!v || 'Field is required'

  const onSubmit = async () => {
    if (!form.value) return

    loading.value = true

    try {
      await auth.signUp({
        username: username.value,
        password: password.value,
        email: email.value
      }, { redirect: false }).then(() => {
        router.push('/', { external: true }) // Redirect to homepage or another page
      })
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please check your credentials and try again.')
    } finally {
      loading.value = false
    }
  }
</script>