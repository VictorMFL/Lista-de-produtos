import React from 'react'
import styles from './Contato.module.css'
import Foto from '../assets/contato.jpg'
import Head from './Head'

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title='Contato' description='Essa é a página de contato' />
        <img src={Foto} alt='Máquina de escrever' className={styles.imgContato} />
        <div className={styles.dados}>
            <h1>Entre em contato.</h1>
            <ul>
                <li className={styles.li}>victormanoel.dev@gmail.com</li>
                <li className={styles.li}>99999-9999</li>
            </ul>
        </div>
    </section>
  )
}

export default Contato
