<template>
  <div>
    <h1>Some posawertsdgt</h1>
    <p>{{ $route.params.postId }}</p>
    <ul>
      <li v-for="block in blocks">
        <h1>Title:{{ block?.heading }}</h1>
        <h1 :v-show="block?.type === heading_1">Title:{{ block?.heading }}</h1>
        <p>paragraph {{ block?.paragraphTypeContent }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import blocksGetter from "../../utils/blocksGetter";

const route = useRoute();
const condition = false;
const parent_id = route?.params?.postId;
const blocks = await blocksGetter(parent_id);
console.log("BLOCK_ZERO", blocks);

if (route.params.group === "admins" && !route.params.id) {
  console.log("Warning! Make sure user is authenticated!");
}
</script>