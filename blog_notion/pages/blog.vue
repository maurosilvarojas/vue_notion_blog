
<template>
  <button @click="increment">Count is: {{ count }}</button>
  <p>The messeage is: {{ msg[0].title }}</p>
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
      this.msg = responseAPI;
      
    },
  },
};

definePageMeta({
  layout: "custom",
});
</script>


