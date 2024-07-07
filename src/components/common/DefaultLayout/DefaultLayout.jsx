import React, { useState } from "react";
import styles from "./styles.module.scss";
import NavBar from "../NavBar/NavBar";
import WelcomeGuide from "../../../pages/WelcomeGuide/WelcomeGuide";
import { useSelector } from "react-redux";
import cx from "classnames";

const DefaultLayout = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  const telegramData = useSelector((state) => state.telegram.telegramData);

  const isIos = telegramData?.platform === "ios";

  const handleGoNext = () => {
    setIsFirstTime(false);
  };

  if (isFirstTime) {
    return <WelcomeGuide goNext={handleGoNext} />;
  }

  return (
    <>
      <div
        style={{ backgroundColor: `#D3D2D2` }}
        className={cx(styles.wrapper, { [styles.ios]: isIos })}
      >
        {children}
      </div>
      <NavBar />
    </>
  );
};

export default DefaultLayout;
