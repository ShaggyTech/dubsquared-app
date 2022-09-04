import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    configPath: "~/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css",
  },
});
