<template>
  <div>
    <img v-bind:src="mainPostAtributes?.cover?.external?.url" />
    <h1 class="mainTitle">
      tittle:{{ mainPostAtributes?.properties?.Name?.title[0]?.plain_text }}
    </h1>
    <p>Tags:</p>

    <p>{{ $route.params.postId }}</p>
    <ul>
      <li v-for="block in blocks">
        <h1 v-if="titleChecker(block?.type)">{{ block?.heading }}</h1>

        <p>paragraph {{ block?.paragraphTypeContent }}</p>
        <hr />
      </li>
    </ul>
  </div>
</template>

<script setup>
import blocksGetter from "../../utils/blocksGetter";

import atributesGetter from "../../utils/atributeGetter";

const { postId } = useRoute().params;
let blocks = [];
let mainPostAtributes = [];
const condition = false;
console.log("finding id ..... from", postId);
const parent_id = postId;

mainPostAtributes = await findAtributes(parent_id);
blocks = await findBlocks(parent_id);

console.log(
  "ATRIBUTES :",
  mainPostAtributes.properties.Name.title[0].plain_text
);
console.log("ATRIBUTES :", mainPostAtributes?.cover?.external?.url);
async function findAtributes(parent) {
  console.log("TEST ATRIBUTES", parent);
  const response = await atributesGetter(parent);
  return response;
}

async function findBlocks(parent) {
  const _responseAPI = await blocksGetter(parent);
  return _responseAPI;
}

function titleChecker(_type) {
  console.log("titleChecker", _type === "heading_1");

  let response = _type === "heading_1";
  return response;
}

// if (route.params.group === "admins" && !route.params.id) {
//   console.log("Warning! Make sure user is authenticated!");
// }
</script>

<style lang="postcss" scoped>
.mainTitle {
  @apply px-4 py-2 m-2 text-red-700;
}
</style>