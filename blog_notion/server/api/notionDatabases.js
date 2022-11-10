import { Client } from "@notionhq/client";
import { buildDirectiveArgs } from "@vue/compiler-core";

export function buildTags(_tagsArray) {
  const _tags = [];
  const newTags = _tagsArray.map((tag) => _tags.push(tag.name));
  return _tags;
}

export default async (req, res) => {
  const notion = new Client({
    auth: "secret_jEDyyrG09fZbK6mHI4TGOLuCgdZkCeen8b69MwmbHfx",
  });
  const posts = [];
  if (req.method === "GET") {
    // console.log("POST REQUEST");
  } else {
    const databaseId = "5cfa52c25735482d835ac9f2b6c18570";
    // console.log("db to find", process.env.NOTION_DATABASE_ID);
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    // console.log(
    //   "RESPONSE RAW *****",
    //   JSON.stringify(
    //     response?.results[0]?.properties?.tags?.multi_select[0].name
    //   )
    // );
    response.results.map((post) => {
      posts.push({
        id: post?.id,
        title: post?.properties?.Name?.title[0]?.plain_text,
        coverImage: post?.cover?.external?.url,
        tags: buildTags(post?.properties?.tags?.multi_select),
        abstract: post?.properties?.abstract?.rich_text[0]?.plain_text,
      });
    });
    console.log("RETURN POST OBJECTfrom notion.js", posts);
    return posts;
  }
};
