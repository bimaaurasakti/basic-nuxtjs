<template>
  <section id="index">
    <v-row>
      <v-col
        cols="12"
        md="12"
      >
        <v-card
          class="mx-auto"
          prepend-icon="$vuetify"
          subtitle="Welcome to Vuetify"
          width="400"
        >
          <template v-slot:title>
            <span class="font-weight-black">Hello User</span>
          </template>

          <v-card-text class="bg-surface-light pt-4">
            This is a simple NuxtJS and Vuetify 3 project.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    middleware: 'auth'
  })
</script>
