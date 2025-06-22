
import React from 'react'
import styles from "./textarea.module.scss"


const TextArea = ({label, placeholder}) => {
  return (
    <div className={styles.textareaContainer}>
      <label
        htmlFor={label}
        className={styles.textareaContainer__label}
      >
        {label}
      </label>
      <textarea
        className={styles.textareaContainer__input}
        placeholder={placeholder}
        aria-placeholder={placeholder}
      />
    </div>
  );
}

export default TextArea;