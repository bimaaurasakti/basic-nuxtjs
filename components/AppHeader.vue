<template lang="">
  <v-app-bar
    class="px-3"
    density="compact"
    flat
  >
    <v-avatar
      class="hidden-md-and-up"
      color="grey-darken-1"
      size="32"
    ></v-avatar>

    <v-spacer></v-spacer>

    <v-tabs
      color="grey-darken-2"
      centered
    >
      <v-tab href="#index">Index</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      location="bottom"
    >
      <template v-slot:activator="{ props }">
        <v-btn
            icon
            v-bind="props"
            size="small"
          >
            <v-avatar
              color="brown"
              size="small"
            >
              <v-img  
                src="https://cdn.vuetifyjs.com/images/john.jpg"
              ></v-img>
            </v-avatar>
          </v-btn>
      </template>

      <v-card class="mt-4" min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            subtitle="Javascript Developer"
            title="User"
          >
            <template v-slot:append></template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <div class="py-5 px-4">
          <v-btn rounded="xl" block color="error" @click="signOut()">Logout</v-btn>
        </div>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
const fav = ref(true)
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
const auth = useAuth()

const signOut = () => {
  auth.signOut({ redirect: false }).then(() => {
    navigateTo('/login')
  })
}
</script>

<style lang="">
  
</style>