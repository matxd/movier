import axios from "axios";

export default async function PostComment(comment) {
  await axios.post("https://movier-api.vercel.app/comments", comment);
}