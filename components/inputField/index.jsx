import React from 'react'
import './input.scss'
import styles from './input.module.scss'


const Inputfield = ({label,type, placeholder}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={label} className={styles.inputContainer__label}>
        {label}
      </label>
      <input
        type={type}
        className={styles.inputContainer__input}
        placeholder={placeholder}
        aria-placeholder={placeholder}
      />
    </div>
  );
}

export default Inputfield