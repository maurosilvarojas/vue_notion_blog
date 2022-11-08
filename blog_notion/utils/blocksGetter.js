import { Client } from "@notionhq/client";

export default async function blocksGetter(postId) {
   const responseAPI = await $fetch("/api/notionBlocks");
   console.log("RESPONSE find blovk", responseAPI);
   
}
