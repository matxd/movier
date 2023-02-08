import { useContext } from "react";
import { GeneroContext } from "../../contexts/generoContexts";
import styles from "./GenreLink.module.css";

export default function GenreLink({ children, genre }) {
  const { genero, setGenero } = useContext(GeneroContext);

  return <p className={`${styles.p} ${genero === genre ? styles.selected : '' }`} onClick={() => setGenero(genre)}>{children}</p>;
}