import { Client } from "@notionhq/client";

export default async (req, res) => {
  // console.log("BLOKS REQUEST", req?.req?.body);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const postContent = [];

  if (req?.req?.method === "POST") {
    // console.log("POST REQUEST");
  } else {
    const req_parameters = JSON.parse(req?.req?.body);
    console.log("POST REQUEST id", req_parameters.postId);
    const postId2 = "43cff44bff5a4073b81376c0ca236f22";

    const response = await notion.blocks.children.list({
      block_id: req_parameters.postId,
    });
    // console.log("RESPONSE block RAW *****", JSON.stringify(response));
    response.results.map((childrenPostContent) => {
      postContent.push({
        id: childrenPostContent?.id,
        type: childrenPostContent?.type,
        heading: childrenPostContent?.heading_1?.rich_text[0]?.plain_text,
        paragraphTypeContent:
          childrenPostContent?.paragraph?.rich_text[0]?.plain_text,
      });
    });
    // console.log("RETURN BLOCK", postContent);
    return postContent;
  }
};
