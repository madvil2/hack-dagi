import React from "react";
import { useTranslation } from "react-i18next";

const Typography = ({ children }) => {
  const { t } = useTranslation();
  return <>{t(children)}</>;
};

export default Typography;
