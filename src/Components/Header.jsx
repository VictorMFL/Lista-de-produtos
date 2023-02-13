import React from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to='/' className={styles.a}>Produtos</NavLink>
      <NavLink to='contato' className={styles.a}>Contato</NavLink>
    </div>
  )
}

export default Header
