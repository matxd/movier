import axios from "axios";

export default async function DeleteComment(id) {
  await axios.delete("https://movier-api.vercel.app/comments/" + id);
}