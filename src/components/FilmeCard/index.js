import { Link } from "react-router-dom";
import styles from "./FilmeCard.module.css";

export default function FilmeCard({ movie }) {
  return (
    <Link to={'/details'} state={{ data: movie }} className={styles.card}>
      <div className={styles.imagem}>
        <img src={require(`../../../public/assets/movies/${movie.thumb}`)} alt="Thumb Movie" />
      </div>
      <div className={styles.content}>
        <p>{movie.titulo}</p>
        <span>{movie.lancamento}</span>
      </div>
    </Link>
  );
}