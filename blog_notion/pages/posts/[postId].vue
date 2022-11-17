<template>
  <div>
    <h1>Some post</h1>
    <p>{{ $route.params.postId }}</p>
    
  </div>
</template>

<script setup>
const route = useRoute();

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}
</script>