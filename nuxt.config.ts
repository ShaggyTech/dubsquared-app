import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'acceptHMRUpdate',
          'defineStore',
          'getActivePinia',
          'skipHydrate',
          'storeToRefs',
        ],
      },
    ],
  ],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
    cssPath: '~/assets/css/tailwind.css',
  },
})
