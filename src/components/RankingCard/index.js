import { Link } from "react-router-dom";
import styles from "./RankingCard.module.css";
import likeSvg from "../../assets/like-svgrepo-com.svg"

// Icons Rating
import Stars0 from '../../assets/rating/Stars0.svg';
import Stars1 from '../../assets/rating/Stars1.svg';
import Stars2 from '../../assets/rating/Stars2.svg';
import Stars3 from '../../assets/rating/Stars3.svg';
import Stars4 from '../../assets/rating/Stars4.svg';
import Stars5 from '../../assets/rating/Stars5.svg';

export default function FilmeCard({ movie, index }) {
  return (
    <Link to={'/details'} state={{ data: movie }} className={styles.card}>
      <div className={styles.imagem}>
        <img src={require(`../../../public/assets/movies/${movie.thumb}`)} alt="Thumb Movie" />
      </div>

      <div className={styles.contentContainer}>

        <div className={styles.contentTitulo}>

          <div className={styles.content}>
            <h1>{movie.titulo}</h1>
            <span>{movie.lancamento}</span>
          </div>
         

          <div>
            <h2 style={{textAlign: 'end'}}>#{index}</h2>
            <div className={styles.rating}>
              {movie.rating < 10 && <img src={Stars0} alt="Icon Rating" />}
              {movie.rating >= 10 && movie.rating < 20 && <img src={Stars1} alt="Icon Rating" />}
              {movie.rating >= 20 && movie.rating < 30 && <img src={Stars2} alt="Icon Rating" />}
              {movie.rating >= 30 && movie.rating < 40 && <img src={Stars3} alt="Icon Rating" />}
              {movie.rating >= 40 && movie.rating < 50 && <img src={Stars4} alt="Icon Rating" />}
              {movie.rating >= 50 && <img src={Stars5} alt="Icon Rating" />}
            </div>
          </div>

        </div>

        <div className={styles.content}>
            <p><strong>Direção:</strong> {movie.diretor}</p>   
        </div>

        <div className={styles.content}>
          <div className={styles.contentLike}>
            <img src={likeSvg} alt="aaaa"/>
            <h2>{movie.rating}</h2>
          </div>
        </div>

      </div>
     
    </Link>
  );
}