<template>
  <div class="bg-gray-50">
    <!-- navbar -->
    <nav class="relative container last: mx-auto p-6">
      <div class="flex items-center justify-between">
        <!-- logo -->
        <NuxtLink to="/">
          <div class="flex flex-row">
            <p class="text-red-700 font-extrabold text-3xl">RED</p>
            <p class="text-3xl">MauroSilva</p>
          </div>
        </NuxtLink>
        <!-- menu items -->
        <ul
          class="
            flex flex-col
            md:flex-row
            items-center
            space-y-6
            md:space-y-0 md:space-x-6
            lg:md:-x-8
          "
        >
          <li class="hidden space-x-6 md:flex" v-for="menu in menus">
            <NuxtLink class="hover:text-red-700" :to="menu.routingPage">
              {{ menu.page }}
            </NuxtLink>
            <!-- <a href="{{menu.routingPage}}" class="hover:text-red-700">{{
              menu.routingPage
            }}</a> -->
          </li>
        </ul>

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
          >Github</a
        >
        <!-- hamburger button -->

        <button id="menu-btn" class="hamburger md:hidden focus:outline-none">
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>
      <div class="md:hidden">
        <div
          id="menu"
          class="
            absolute
            flex-col
            items-center
            hidden
            self-end
            py-8
            mt-10
            space-y-6
            font-bold
            bg-white
            sm:w-auto sm:self-center
            left-6
            right-6
            drop-shadow-md
          "
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
    <hr />
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { page: "Blog", routingPage: "./blog" },
        { page: "Portfolio", routingPage: "./portfolio" },
        { page: "CV", routingPage: "./cv" },
        { page: "Contact", routingPage: "./contact" },
      ],
      setup: "dark",
    };
  },
  methods: {},
};
</script>