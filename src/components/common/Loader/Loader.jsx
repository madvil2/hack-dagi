import React from "react";
import styles from "./styles.module.scss";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircleLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
