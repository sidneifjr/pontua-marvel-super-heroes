import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://localhost:3000',

    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
})
