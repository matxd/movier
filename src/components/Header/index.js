import styles from './Header.module.css'

import HeaderLink from '../HeaderLink';

import brand from '../../assets/movier.png'

export default function Header() {
  return (
    <>
      <header>
        <div className={styles.container}>
          <nav className={styles.navegacao}>
            <HeaderLink to='/' children={<img src={brand} alt="Brand" width={216} height={72} />} />
            <HeaderLink to='/' children={'Home'} />
            <HeaderLink to='/categorias' children={'Categorias'} />
            <HeaderLink to='/ranking' children={'Ranking'} />
          </nav>
        </div>
      </header>
    </>
  );
};