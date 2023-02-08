import axios from "axios";

export default async function GetComments(id) {
  const response = await axios.get("https://movier-api.vercel.app/comments?idMovie="+id);
  return response.data;
}