// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "nuxt-swiper"],
  fonts: {
    families: [
      {
        name: "Montserrat",
        provider: "google",
        weights: [400, 600, 700],
        style: "normal",
        subsets: ["latin", "cyrillic"],
      },
    ],
  },
  app: {
    baseURL: "/autoexpert/",
  },
})
