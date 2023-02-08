import styles from './HeaderLink.module.css';
import { useLocation, Link } from 'react-router-dom';

export default function HeaderLink({ children, to }) {
  const localizacao = useLocation();

  return(
    <>
      <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkSublinhado : ''}`} to={to}>
        {children}
      </Link>
    </>
  );
};