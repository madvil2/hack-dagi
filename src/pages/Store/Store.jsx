import React from "react";
import styles from "./styles.module.scss";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import {Button} from "antd";
import paths from "../paths";
import {useNavigate} from "react-router-dom";

const Store = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
  return (
    <div className={styles.container}>
        <ProjectsSection title="Trending Projects" section="Trending" />
        <ProjectsSection title="Our Choice Projects" section="Our Choice" />
        <Button type="primary" onClick={() => handleNavigate(paths.projects)}>All</Button>
    </div>
  );
};

export default Store;
