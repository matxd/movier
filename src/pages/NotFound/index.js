import styles from './NotFound.module.css';

import image from '../../assets/notfound.png';

const NotFound = () => {
  return (
    <>
      <div className={styles.div}>
        <h1>Página não encontrada</h1>
        <img src={image} alt="404 Icon" />
      </div>
    </>
  )
};

export default NotFound;