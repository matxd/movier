import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

import styles from './App.module.css';

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Categorias from "./pages/Categorias";
import Details from "./pages/Details";
import Ranking from "./pages/Ranking";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className={styles.containerGlobal}>
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/categorias' element={<Categorias />} />
            <Route path='/details' element={<Details />} />
            <Route path='/ranking' element={<Ranking />} />
            <Route path='*' element={<NotFound />} />
          </Routes >
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
};