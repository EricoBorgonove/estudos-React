import styles from './Button.module.css'

function Button({ name , cor }) {
  return (
      <button
        className={`${styles.button} ${styles[cor]}`}
      >
        { name }
      </button>
    
  )
}

export default Button
