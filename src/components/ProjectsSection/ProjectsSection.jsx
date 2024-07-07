import React, { useState } from 'react';
import { Carousel } from 'antd';
import styles from './styles.module.scss';
import { projects } from '../../utils/constants';
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal"; // Adjust the import path as necessary

const ProjectsSection = ({ title, section }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to chunk the projects array into groups of 6
    const chunkProjects = (projects, size) => {
        const chunks = [];
        for (let i = 0; i < projects.length; i += size) {
            chunks.push(projects.slice(i, i + size));
        }
        return chunks;
    };

    // Filter projects based on the section
    const filteredProjects = projects.filter(project => project.section === section);

    // Limit the filtered projects to 18
    const limitedProjects = filteredProjects.slice(0, 18);

    const projectChunks = chunkProjects(limitedProjects, 6);

    const showModal = (project) => {
        setSelectedProject(project);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <section className={styles.projectsSection}>
            <h2 className={styles.title}>{title}</h2>
            <Carousel
                arrows
                infinite={false}
                dots={{ className: styles.carouselDots }}
            >
                {projectChunks.map((chunk, index) => (
                    <div key={index} className={styles.carouselPage}>
                        <div className={styles.projectsGrid}>
                            {chunk.map(project => (
                                <div
                                    key={project.id}
                                    className={styles.project}
                                    onClick={() => showModal(project)}
                                >
                                    <img src={project.imageUrl} alt={project.name} className={styles.projectImage} />
                                    <h3 className={styles.projectName}>{project.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Carousel>

            <ProjectDetailsModal
                visible={isModalVisible}
                project={selectedProject}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </section>
    );
};

export default ProjectsSection;
