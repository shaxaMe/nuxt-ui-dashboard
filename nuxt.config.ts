// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui-pro', '@vueuse/nuxt', 'nuxt-svgo'],
  ui: {
    colorMode: true
  },
  devServer: {
    host: import.meta.env.DEV_HOST,
    port: import.meta.env.DEV_PORT
  },
  devtools: {
    enabled: true
  },
  svgo: {
    svgo:false,
    autoImportPath:"~/assets/images/icons",
    componentPrefix:"icon",
  },
  css: ['~/assets/css/main.css','~/assets/scss/main.scss'],

  routeRules: {
    '/api/**': {
      cors: true
    }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})