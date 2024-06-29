import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    // Auth
    '@sidebase/nuxt-auth',

    // Vuetify
    (_options, nuxt) => { 
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  // Auth
  auth: {
    baseURL: 'http://localhost:3001/api/auth',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        signUp: { path: '/register', method: 'post' },
        getSession: { path: '/profile', method: 'get' }
      },
      token: { signInResponseTokenPointer: '/access_token' },
    }
  },

  // Vuetify
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
