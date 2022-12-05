<template>
  <div>
    <img v-bind:src="mainPostAtributes?.cover?.external?.url" />
    <div class="flex flex-row">
      <h1 class="mainTitle">
        {{ mainPostAtributes?.properties?.Name?.title[0]?.plain_text }}
      </h1>
      <div class="flex flex-col">
        <div
          class="items-end text-red-300"
          v-text="formatDate(mainPostAtributes?.created_time)"
          style="text-align: center"
        ></div>
        <div>
          <p>Tags:</p>
          <ul>
            <li
              v-for="tag in mainPostAtributes?.properties?.tags?.multi_select"
            >
              <p>{{ tag.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- <p>{{ $route.params.postId }}</p> -->
    <br />
    <ul>
      <li class="mt-10 mx-6" v-for="block in blocks">
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

        <div>
          <iframe
            v-if="videoChecker(block?.type)"
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

function videoUrlChecker(blockVideo) {
  console.log("BLOCK_VIDEO: ", blockVideo);
  const url = blockVideo?.video?.external?.url;
  return url;
}

async function findAtributes(parent) {
  const response = await atributesGetter(parent);
  console.log("ATRIBUTES", response);
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
  console.log("VIDEO CHECKER", _type);
  let _response = _type === "video";
  return _response;
}

function formatDate(_date) {
  const newDate = new Date(_date);
  const response = newDate.toDateString();
  console.log("DATE", response);
  return response;
}
</script>

<style lang="postcss" scoped>
.mainTitle {
  @apply max-w-md px-4
                    text-lg text-red-700
                   mt-6 m-6
                    font-bold
                    text-center
                    md:text-4xl md:text-left;
}
</style>