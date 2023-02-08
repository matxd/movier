import styles from './Details.module.css';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Comentario from '../../components/Comentario';

import PostComment from '../../services/postComment';
import GetComments from '../../services/getComments';
import PostLike from '../../services/postLike';
import DeleteComment from "../../services/DeleteComment";

export default function Details() {
  const localizacao = useLocation();
  const { data } = localizacao.state;
  const [rating, setRating] = useState(data.rating);
  const [comments, setComments] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  
  useEffect(() => {
    GetComments(data.id).then((response) => setComments(response))
  }, [data.id])

  const like = () => {
    setRating(rating + 1)
    data.rating++;
    PostLike(data);
  }

  const onSubmit = (dataForm) => {
    dataForm.idMovie = data.id;
    PostComment(dataForm).then(() => {
      GetComments(data.id).then((response) => setComments(response));
    });
    reset()
  }

  const deleteF = (id) => {
   DeleteComment(id).then(() => {
    GetComments(data.id).then((response) => setComments(response));
   })
  }

  return(
    <>
      <div className={styles.contentMovie}>
        <img src={require(`../../../public/assets/movies/${data.thumb}`)} alt="Thumb Movie" />
        <div className={styles.detalhes}>
          <h1>{data.titulo} - ({data.lancamento})</h1>
          <span className={styles.content}>{data.genero}</span>
          <h2>Direção: <span>{data.diretor}</span></h2>
          <p className={styles.sinopse}><strong>Sinopse:</strong> {data.sinopse}</p>
        </div>
        <div className={styles.atores}>
          <h1>Atores:</h1>
          <ul>
            {data.atores.map((ator) => (
              (<li key={ator}>{ator}</li>)
            ))}
          </ul>
          <div className={styles.likes}>
            <button onClick={like}><span>Curtir | {rating}</span></button>            
          </div>
        </div>
      </div>

      <div className={styles.comments}>
        <h2>Deixe seu comentário:</h2>
        <form className={styles.containerForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input type="email" required placeholder='Digite seu e-mail...' {...register("email")}/>
          </div>
          <div className={styles.field}>
            <label htmlFor="comment">Comentário</label>
            <input type="text" required placeholder='Digite seu comentário...' {...register("comment")}/>
          </div>
          <input className={styles.submit} type="submit" value="Comentar"/>
        </form>
        <div className={styles.listComments}>
          {comments ? comments.map(item => <Comentario key={item.id} email={item.email} comment={item.comment} deleteFunction={() => deleteF(item.id)} />) : "" }  
        </div>
      </div>
    </>
  );
};