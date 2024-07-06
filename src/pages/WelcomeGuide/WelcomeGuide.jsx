import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "./styles.module.scss";
import background from "../../assets/images/papirus.png";
import { getText } from "./constants";
import Button from "../../components/common/Button/Button";

const WelcomeGuide = ({ goNext }) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

  const text = getText(() => handleAnimationComplete());
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
      }}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <TypeAnimation sequence={text} speed={99} wrapper="p" repeat={0} />
        {isAnimationComplete && (
          <Button className={styles.nextButton} onClick={goNext}>
            Продолжить
          </Button>
        )}
      </div>
    </div>
  );
};

export default WelcomeGuide;
