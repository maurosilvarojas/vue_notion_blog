import { Client } from "@notionhq/client";

export default async (req, res) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const postContent = [];
  if (req.method === "GET") {
    // console.log("POST REQUEST");
  } else {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.blocks.children({
      database_id: databaseId,
    });
    //  console.log("RESPONSE RAW *****", JSON.stringify(response))
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
