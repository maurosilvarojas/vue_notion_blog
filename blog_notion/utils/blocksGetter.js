import { Client } from "@notionhq/client";

export default async function blocksGetter(_postId) {
  const data = { postId: _postId };
  const responseAPI = await $fetch("/api/notionBlocks", {
    body: JSON.stringify(data),
  });
  // console.log("BLOCKS GETTER", responseAPI);
  return responseAPI;
}
