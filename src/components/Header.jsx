import React from 'react'
import styles from '@/style/Header.module.scss'

function Header({ children }) {
  return (
    <div className={styles.header}>{children}</div>
  )
}

export default Header