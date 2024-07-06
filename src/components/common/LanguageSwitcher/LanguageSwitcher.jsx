import React, { useState } from "react";
import i18n from "i18next";
import styles from "./styles.module.scss";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className={styles.languageSwitcher}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={language === "en"}
          onChange={toggleLanguage}
        />
        <span className={styles.slider}></span>
      </label>
      <span>{language === "en" ? "EN" : "RU"}</span>
    </div>
  );
};

export default LanguageSwitcher;
