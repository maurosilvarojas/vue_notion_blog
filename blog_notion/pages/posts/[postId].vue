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

const { postId } = useRoute().params;
let blocks = [];
const condition = false;
console.log("findinsg id ..... from", postId);
const parent_id = postId;
blocks = await findBlocks(parent_id);

// console.log("BLOCK_ZERO", blocks);

async function findBlocks(parent) {
  console.log("findinsg blocks ..... from", parent);
  const _responseAPI = await blocksGetter(parent);

  console.log("BLOCK_find blocks", blocks);
  return _responseAPI;
}

// if (route.params.group === "admins" && !route.params.id) {
//   console.log("Warning! Make sure user is authenticated!");
// }
</script>