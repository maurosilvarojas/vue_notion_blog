

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  css: ["~/assets/css/tailwind.css"],
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
});
