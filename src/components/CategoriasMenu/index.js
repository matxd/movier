import styles from './CategoriasMenu.module.css'

import GenreLink from "../GenreLink";

const CategoriasMenu = () => {
  return (
    <div className={styles.container}>
      <GenreLink genre={false} children={'Todos'} />
      <GenreLink genre={"Terror"} children={'Terror'} />
      <GenreLink genre={"Romance"} children={'Romance'} />
      <GenreLink genre={"Comédia"} children={'Comédia'} />
      <GenreLink genre={"Ação"} children={'Ação'} />
      <GenreLink genre={"Aventura"} children={'Aventura'} />
    </div>
  )
}

export default CategoriasMenu;