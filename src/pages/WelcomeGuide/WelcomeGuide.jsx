import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./styles.module.scss";
import background from "../../assets/images/papirus.png";
import { getText } from "./constants";

const WelcomeGuide = ({ goNext }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const text = getText(() => handleAnimationComplete());

  useEffect(() => {
    if (isAnimationComplete) {
      const handleClick = () => {
        goNext();
      };

      window.addEventListener("click", handleClick);
      return () => {
        window.removeEventListener("click", handleClick);
      };
    }
  }, [isAnimationComplete, goNext]);

  return (
      <div
          className={styles.wrapper}
      >
        <div className={styles.content}>
          <TypeAnimation sequence={text} speed={99} wrapper="p" repeat={0} />
          {isAnimationComplete && (
              <div className={styles.continueMessage}>To continue, press anything...</div>
          )}
        </div>
      </div>
  );
};

export default WelcomeGuide;
