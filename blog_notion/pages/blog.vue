<template>
  <div class="bg-gray-50 container mt-top-bar mx-auto">
    <p>Lately on my code trip...</p>
    <div class="place-content-center">
      <div class="bg-gray-50">
        <ul
          class="
            mt-12
            grid
            gap-6
            sm:px-8
            mx-auto
            md:grid-cols-2
            lg:grid-cols-3
            md:max-w-none
          "
        >
          <li v-for="post in posts">
            <!-- blog card -->
            <div
              class="
                flex flex-col
                bg-slate-50
                rounded-lg
                shadow-lg
                overflow-hidden
                flex-1
              "
            >
              <div class="flex flex-col space-y-12">
                <div class="bg-gray-500 h-px">
                  <img class="shrink" v-bind:src="post.coverImage" />
                </div>

                <!-- title -->
                <h1
                  class="
                    max-w-md
                    px-4
                    text-lg text-white
                    font-bold
                    text-center
                    md:text-5xl md:text-left
                  "
                >
                  {{ post.title }}
                </h1>
                <!-- caption -->
                <p class="max-w-sm px-2 text-center text-gray-50 md:text-left">
                  Bring everyone together to build better productsBring everyone
                  together to build better productsBring everyone together to
                  build better productsBring everyone together to build better
                  products
                </p>
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
    console.log("this is mounted");

    this.findPosts();
    const parent_id = "43cff44bff5a4073b81376c0ca236f22";
    blocksGetter(parent_id);
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


