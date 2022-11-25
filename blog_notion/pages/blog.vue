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
                  <NuxtLink class="hover:text-red-700" :to="/posts/ + post.id">
                    <img class="shrink" v-bind:src="post.coverImage" />
                  </NuxtLink>
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

<script setup >
// console.log("BLOG STARTED");
const posts = await findPosts();
// console.log("POST RESPONSE", posts[0]);

async function findPosts() {
  // console.log("finding posts ..... ");
  const responseAPI = await $fetch("/api/notionDatabases");

  // console.log("RESPONSE find post", responseAPI);
  // this.posts = responseAPI;
  return responseAPI;
}

definePageMeta({
  layout: "custom",
});
</script>


