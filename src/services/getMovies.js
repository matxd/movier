import axios from "axios";

export default async function GetMovies() {
  const response = await axios.get("https://movier-api.vercel.app/movies");
  return response.data;
}