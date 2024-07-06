import React from "react";
import styles from "./styles.module.scss";
import LanguageSwitcher from "../../components/common/LanguageSwitcher/LanguageSwitcher";

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.field}>
        <span>Language select</span>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Settings;
