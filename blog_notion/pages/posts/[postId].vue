<template>
  <div>
    <img v-bind:src="mainPostAtributes?.cover?.external?.url" />
    <h1 class="mainTitle">
      tittle:{{ mainPostAtributes?.properties?.Name?.title[0]?.plain_text }}
    </h1>
    <p>Date:{{ mainPostAtributes?.created_time }}</p>
    <p>
      Tags:{{ mainPostAtributes?.properties?.abstract.rich_text[0].plain_text }}
    </p>

    <p>{{ $route.params.postId }}</p>
    <br />
    <ul>
      <li v-for="block in blocks">
        <h1 v-if="titleChecker(block?.type)">{{ block?.heading }}</h1>

        <p v-if="paragraphChecker(block?.type)">
          {{ block?.paragraphTypeContent }}
        </p>
        <img
          v-if="imgChecker(block?.type)"
          v-bind:src="block?.image?.external?.url || block?.image?.file?.url"
        />
        <code v-if="codeChecker(block?.type)">
          {{ block?.code?.rich_text[0]?.plain_text }}
        </code>

        <div v-if="videoChecker(block?.type)">
          <iframe
            width="560"
            height="315"
            :src="videoUrlChecker(block)"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

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

const parent_id = postId;
const videoUrl_ = "https://www.youtube.com/embed/8IOgwHGXqdM";

mainPostAtributes = await findAtributes(parent_id);
blocks = await findBlocks(parent_id);
const videoUrl2 = blocks[6].video?.external?.url;

function videoUrlChecker(blockVideo) {
  const url = blockVideo.video?.external?.url;
  return url;
}

async function findAtributes(parent) {
  const response = await atributesGetter(parent);
  return response;
}

async function findBlocks(parent) {
  const _responseAPI = await blocksGetter(parent);
  return _responseAPI;
}

function titleChecker(_type) {
  let response = _type === "heading_1";
  return response;
}

function paragraphChecker(_type) {
  let response = _type === "paragraph";
  return response;
}

function imgChecker(_type) {
  let response = _type === "image";
  return response;
}

function codeChecker(_type) {
  let response = _type === "code";
  return response;
}

function videoChecker(_type) {
  let response = _type === "video";
  return response;
}
</script>

<style lang="postcss" scoped>
.mainTitle {
  @apply px-4 py-2 m-2 text-red-700;
}
</style>