<template>
  <v-app id="inspire">
    <AppHeader /> 

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>