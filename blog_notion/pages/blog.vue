<template>
  <div>
    <p>Lately on my code trip...</p>

    <ul class="grid-cols-4">
      <li v-for="post in posts">
        <!-- blog card -->
        <div
        class="
          container
          flex flex-col-reverse
          md:flex-row
          items-center
          px-6
          mx-auto
          mt-10
          space-y-0
          md:space-y-0
        "
      >
        <!-- left item -->
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <!-- title -->
          <h1
            class="
              max-w-md
              text-4xl
              font-bold
              text-center
              md:text-5xl md:text-left
            "
          >
{{post.title}}          </h1>
          <!-- caption -->
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Bring everyone together to build better productsBring everyone
            together to build better productsBring everyone together to build
            better productsBring everyone together to build better products
          </p>
          <div class="flex justify-center md:justify-start">
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
          </div>
        </div>
        <!-- image -->
        <div class="mx-auto md:w-1/2">
          <img class="object-fill" v-bind:src=post.coverImage />
        </div>
      </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      posts: [],
      msg: "",
      blogImageUrl:"https://www.notion.so/images/page-cover/rijksmuseum_rembrandt_1642.jpg"
    };
  },
  mounted() {
    console.log("this is mounted");
    this.msg = "THIS IS MOUNTED";
    this.findPosts();
  },
  beforeUpdate() {
    console.log("HOOK BEFORE UPDATE fired");
  },
  updated() {
    console.log("HOOK UPDATE fired");
  },
  methods: {
    increment() {
      this.count++;
    },
    findPosts: async function () {
      console.log("finding posts ..... ");
      const responseAPI = await $fetch("/api/notion");
      console.log("RESPONSE find post", responseAPI);
      this.posts = responseAPI;
    },
  },
};

definePageMeta({
  layout: "custom",
});
</script>


