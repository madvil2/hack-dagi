import React from "react";
import styles from "./styles.module.scss";
import ProjectList from "../../components/ProjectList/ProjectList";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h1>All Projects</h1>
        <ProjectList />
    </div>
  );
};

export default Projects;
