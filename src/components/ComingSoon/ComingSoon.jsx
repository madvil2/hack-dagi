import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import game from "../../assets/images/layout/background-one.webp";
// import sign from "../../assets/images/layout/sign.png";
import { CircleLoader } from "react-spinners";
import { TypeAnimation } from "react-type-animation";
import { getComingText } from "../../pages/WelcomeGuide/constants";
import SocialLinks from "../SocialLinks/SocialLinks";

const ComingSoon = ({ isGame }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = game;
    img.onload = () => setIsImageLoaded(true);
  }, []);

  if (!isImageLoaded) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <CircleLoader color="rgba(54, 215, 183, 1)" />
      </div>
    );
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${game})`,
          height: "100%",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={styles.comingSoon}
      >
          <div className={styles.typing}>
              <h2>SafeWeb3</h2>
              <TypeAnimation
                  sequence={getComingText(() =>
                      console.log("Text animation completed!"),
                  )}
                  speed={1}
                  wrapper="p"
                  repeat={Infinity}
              />
          </div>
          <SocialLinks isGame={isGame} />
      </div>
    </>
  );
};

export default ComingSoon;
