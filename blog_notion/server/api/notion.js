import { Client } from "@notionhq/client";

export default async (req, res) => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const posts = [];
  if (req.method === "GET") {
    // console.log("POST REQUEST");
  } else {
    const databaseId = process.env.NOTION_DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    // console.log("RESPONSE RAW *****", response);
    response.results.map((post) => {
      posts.push({
        id: post?.id,
        title: post?.properties?.Name?.title[0]?.plain_text,
        coverImage:post?.cover?.external?.url
      });
    });
    console.log("RETURN from notion.js", posts);
    return posts;
  }
};
