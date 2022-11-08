import { Client } from "@notionhq/client";

export default async (req, res) => {
  console.log("BLOKS REQUEST");
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const postContent = [];
  if (req.method === "POST") {
    // console.log("POST REQUEST");
  } else {
    const postId = "43cff44bff5a4073b81376c0ca236f22";

    const response = await notion.blocks.children.list({
      block_id: postId,
    });
    console.log("RESPONSE block RAW *****", JSON.stringify(response));
    response.results.map((childrenPostContent) => {
      postContent.push({
        id: childrenPostContent?.id,
        type: childrenPostContent?.type,
      });
    });
    console.log("RETURN BLOCK", postContent);
    return postContent;
  }
};
