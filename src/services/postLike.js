import axios from "axios";

export default async function PostLike(movie) {
  await axios.patch("https://movier-api.vercel.app/movies/" + movie.id, movie)
}