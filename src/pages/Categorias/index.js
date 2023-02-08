import styles from './Categorias.module.css';
import { useEffect } from 'react';

import GetMovies from '../../services/getMovies';

import CategoriasMenu from '../../components/CategoriasMenu';
import FilmeCard from '../../components/FilmeCard';

import { useContext } from 'react';
import { GeneroContext } from '../../contexts/generoContexts';
import { MoviesContext } from '../../contexts/moviesContexts';

export default function Categorias() {
  const { genero } = useContext(GeneroContext)
  const {movies, setMovies} = useContext(MoviesContext)

  useEffect(() => {
    GetMovies().then((response) => setMovies(response))
  }, [setMovies])

  return (
    <>
      <CategoriasMenu />
      <div className={styles.containerList}>
        {movies.map((item) => (
          !genero ? (<FilmeCard key={item.id} movie={item} />) 
            : item.genero === genero ? (<FilmeCard key={item.id} movie={item} />) : ''
        ))}
      </div>
    </>
  );
};