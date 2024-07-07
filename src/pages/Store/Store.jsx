import React from "react";
import styles from "./styles.module.scss";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import {Button} from "antd";

import {useNavigate} from "react-router-dom";

const Store = () => {
  return (
    <div className={styles.container}>
        <ProjectsSection title="Trending Projects" section="Trending" />
        <ProjectsSection title="Our Choice Projects" section="Our Choice" />
    </div>
  );
};

export default Store;
