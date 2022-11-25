import axios from "axios";

export default async function atributeGetter(_postId) {
//   console.log(" ID", _postId);
  const data = { postId: _postId };

  const _finalResponse = await axios
    .post("/api/notionPages", {
      params: { page_id: _postId },
    })
    .then((response) => {
      return { response };
    });

  //   const responseTest = await $fetch("/api/notionPages/", {
  //     method: "get",
  //     body: JSON.stringify(data),
  //   });
  const finalResponse = _finalResponse?.response?.data?.response;
//   console.log("RESPONSE atribute getter", finalResponse);
    return  finalResponse ;
}
