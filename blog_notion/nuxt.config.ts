

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
  runtimeConfig: {
    // The private keys which are only available within server-side
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_DATABASE_ID:process.env.NOTION_DATABASE_ID,
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: "/api",
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
