import styles from "./Display.module.css"; // ✅ Correct path if in same folder

const Display = ({displayValue}) => {
  return <input type="text" className={styles.display}  value={displayValue} readOnly/>;
};

export default Display;
