<template>
  <div class="bg-gray-50 container mt-top-bar mx-auto">
    <h1
      class="
        text-center
        mt-8
        mb-4
        text-4xl
        font-extrabold
        leading-10
        tracking-tight
        sm:text-5xl sm:leading-none
        md:text-6xl
      "
    >
      Lately on my code trip...
    </h1>

    <!-- cards -->
    <div class="place-content-center">
      <div class="bg-gray-50">
        <ul
          class="mt-12 grid gap-6 sm:px-8 mx-auto md:grid-cols-2 lg:grid-cols-3"
        >
          <li v-for="post in posts">
            <!-- own blog card -->
            <div
              class="
                flex flex-col
                bg-slate-50
                rounded-lg
                shadow-lg
                overflow-hidden
                flex-1
                h-50
                hover:drop-shadow-2xl
              "
            >
              <!-- tags -->
              <div class="flex flex-col space-y-12">
                <div class="bg-gray-500 bg-opacity-25 h-px">
                  <img class="shrink" v-bind:src="post.coverImage" />
                </div>
                <!-- <div class="flex flex-row-reverse flex-wrap items-end">
                  <ul>
                    <li v-for="tag in post.tags">
                      <p
                        class="
                          p-1
                          text-white
                          bg-gray-700 bg-opacity-25
                          rounded-full
                          baseline
                          hover:bg-brightRedLight
                        "
                      >
                        {{ tag }}
                      </p>
                    </li>
                  </ul>
                </div> -->

                <!-- title -->
                <h1
                  class="
                    max-w-md
                    px-4
                    text-lg text-white/75
                    hover:text-white
                    font-bold
                    text-center
                    md:text-4xl md:text-left
                  "
                >
                  {{ post.title }}
                </h1>
                <!-- caption -->
                <div>
                  <!-- <p class="text-xs">{{ post.abstract }}</p> -->
                  <p
                    class="
                      max-w-sm
                      text-xs
                      px-2
                      mb-4
                      text-center text-white
                      md:text-left
                    "
                  >
                    {{ post.abstract }}
                  </p>
                </div>

                <!-- <p class="max-w-sm px-2 text-center text-gray-50 md:text-left">
                  Bring everyone together to build better productsBring everyone
                  together to build better productsBring everyone together to
                  build better productsBring everyone together to build better
                  products
                </p> -->
                <!-- <div class="flex justify-center md:justify-start">
                  <a
                    href=""
                    class="
                      p-3
                      px-6
                      py-2
                      text-white
                      bg-red-700
                      rounded-full
                      baseline
                      hover:bg-brightRedLight
                    "
                    >READ MORE</a
                  >
                </div> -->
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import blocksGetter from "../utils/blocksGetter";
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      posts: [],
      msg: "",
      blogImageUrl:
        "https://www.notion.so/images/page-cover/rijksmuseum_rembrandt_1642.jpg",
    };
  },
  mounted() {
    // console.log("this is mounted");

    this.findPosts();
    const parent_id = "43cff44bff5a4073b81376c0ca236f22";
    // blocksGetter(parent_id);
  },
  beforeUpdate() {
    // console.log("HOOK BEFORE UPDATE fired");
  },
  updated() {
    // console.log("HOOK UPDATE fired");
  },
  methods: {
    increment() {
      this.count++;
    },
    findPosts: async function () {
      // console.log("finding posts ..... ");
      const responseAPI = await $fetch("/api/notionDatabases");
      // console.log("RESPONSE find post", responseAPI);
      this.posts = responseAPI;
    },
  },
};

definePageMeta({
  layout: "custom",
});
</script>


