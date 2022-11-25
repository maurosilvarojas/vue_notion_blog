import { Client } from "@notionhq/client";

export default defineEventHandler(async (event) => {
  let postAtributes = [];
  let response = [];
  // console.log("HEY THERE from atribute getter");
  let body = await readBody(event);
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  // console.log("BLOCKS id requested", body?.params?.page_id);

  const _pageId = body?.params?.page_id;

  response = await notion?.pages?.retrieve({
    page_id: _pageId,
  });

  // console.log("atributes response", { response });
  // let finalResponse = await response?.map((pageAtribute) => {
  //   console.log("CHILDREN POST", childrenPostContent.id);
  //   postAtributes.push({
  //     id: pageAtribute?.id,
  //     title: pageAtribute?.name?.title[0].plain_text,
  //     created_time: pageAtribute.created_time,
  //     icon: pageAtribute?.icon?.emoji,
  //     cover: pageAtribute?.cover?.external?.url,
  //     heading: childrenPostContent?.heading_1?.rich_text[0]?.plain_text,
  //     properties: childrenPostContent?.paragraph?.rich_text[0]?.plain_text,
  //   });
  // });
  // console.log("RESPONSE block RAW *****", postContent);
  return {response};
});
