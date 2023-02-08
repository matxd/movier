import React from 'react'
import styles from "./Comentario.module.css"

export default function Comentario({email, comment, deleteFunction}) {

  return (
    <div className={styles.comment}>
      <div>
        <h3>{email}</h3>
        <p>{comment}</p>
      </div>
      <button onClick={deleteFunction}>x</button>
    </div>
  )
}