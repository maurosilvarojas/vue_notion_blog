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
  privateRuntimeConfig: {
    // The private keys which are only available within server-side
    NOTION_API_KEY: "secret_jEDyyrG09fZbK6mHI4TGOLuCgdZkCeen8b69MwmbHfx",
    NOTION_DATABASE_ID: "5cfa52c25735482d835ac9f2b6c18570",
    // Keys within public, will be also exposed to the client-side
  },

  css: ["~/assets/css/tailwind.css"],
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
});
