import styles from './Ranking.module.css';

import RankingCard from '../../components/RankingCard';


import GetMovies from '../../services/getMovies';

import { useContext, useEffect } from 'react';
import { MoviesContext } from '../../contexts/moviesContexts';

export default function Ranking() {
  const { movies, setMovies } = useContext(MoviesContext)

  useEffect(() => {
    GetMovies().then((response) => setMovies(response))
  }, [setMovies])

  let ordenado = movies.sort((a, b) => b.rating - a.rating)

  return (
    <>
      <h1 className={styles.h1}>Filmes mais bem avaliados</h1>
      <div className={styles.containerOrdenado}>
        {ordenado.map((item, index) => (
           (<RankingCard key={item.id} movie={item} index={index+1} />) 
        ))}
      </div>
    </>
  );
};