import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  let postContent = [];
  let response = [];
  console.log("HEY THERE from post");
  let body = await readBody(event);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  console.log("BLOCKS id requested", body.postId);

  // console.log("POST REQUEST");
  const req_parameters = body;
  // console.log("POST REQUEST id", req_parameters);
  const postId2 = "43cff44bff5a4073b81376c0ca236f22";

  response = await notion?.blocks?.children?.list({
    block_id: req_parameters.postId,
  });

  // response = JSON.stringify(response);
  // console.log("RESPONSE PRE RAW *****", response);

  let finalResponse = await response?.results?.map((childrenPostContent) => {
    // console.log("CHILDREN POST", childrenPostContent.id);
    postContent.push({
      id: childrenPostContent?.id,
      type: childrenPostContent?.type,
      heading: childrenPostContent?.heading_1?.rich_text[0]?.plain_text,
      paragraphTypeContent:
        childrenPostContent?.paragraph?.rich_text[0]?.plain_text,
    });
  });
  console.log("RESPONSE block RAW *****", postContent);
  return postContent;
});
