export default async function blocksGetter(_postId) {
  // console.log("PARENT ID", _postId);
  const data = { postId: _postId };
  const responseTest = await $fetch("/api/notionblocks", {
    method: "post",
    body: JSON.stringify(data),
  });
  // console.log("RESPONSE TEST", responseTest);
  // console.log("BLOCKS GETTER", responseAPI);
  return responseTest;
}
