import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C", "1", "2", "+",
    "3", "4", "-", 
    "5", "6", "*", 
    "7", "8", "/", 
    "9", "0", ".", "="
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((buttonName, index) => {
        
        // Add classes conditionally for C and =
        const btnClass = 
          buttonName === "C" ? styles.clear :
          buttonName === "=" ? styles.equals :
          styles.button;

        return (
          <button
            key={index}
            className={btnClass}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
