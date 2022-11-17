<template>
  <div class="mx-8">
    <!-- navbar -->

    <!-- main story -->
    <section id="mainstory">
      <!-- flex container -->
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
            Bring everyone together to build better products
          </h1>
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
              >Read more</a
            >
          </div>
        </div>
        <!-- image -->
        <div class="mx-auto md:w-1/2">
          <img class="object-fill" src="../assets/images/clean-code.png" />
        </div>
      </div>
    </section>
    <hr />
    <!-- features section -->
    <div
      class="
        container
        flex flex-col
        px-4
        mx-auto
        mt-10
        space-y-12
        md:space-y-0 md:flex-row
      "
    >
      <!-- left side features -->
      <div class="flex flex-col space-y-12 md:w-1/12">
        <h2 class="max-w-md text-4xl font-bold text-center">
          What`s the difference abour something?
        </h2>
        <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Bring everyone together to build better productsBring everyone
          together to build better productsBring everyone together to build
          better productsBring everyone together to build better products
        </p>
      </div>

      <!-- right side list -->
      <div class="flex flex-col space-y-8 md:w-1/2">
        <!-- list item 1 -->
        <div
          class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >
          <!-- heading -->
          <div
            class="rounded-l-full bg-brightRedSuperLight md:bg-transparent"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>