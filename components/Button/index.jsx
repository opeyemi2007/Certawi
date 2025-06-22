import React from 'react'
import './button.scss'
import styles from './button.module.scss'

const Button = ({children, name, width}) => {
  return (
      <button className={styles.btn} style={{
        width: width
    }}>{children} {name}</button>
  )
}

export default Button