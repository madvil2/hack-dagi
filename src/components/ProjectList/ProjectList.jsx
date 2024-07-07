import React, { useState } from 'react';
import { List, Button, Skeleton, Divider } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './styles.module.scss';
import { projects as allProjects } from '../../utils/constants';
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal"; // Adjust the import path as necessary

const ProjectList = () => {
    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState(allProjects.slice(0, 10));
    const [hasMore, setHasMore] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            const nextProjects = allProjects.slice(projects.length, projects.length + 10);
            setProjects([...projects, ...nextProjects]);
            setLoading(false);
            if (projects.length >= allProjects.length) {
                setHasMore(false);
            }
        }, 1500);
    };

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
        <div
            id="scrollableDiv"
            className={styles.projectListContainer}
        >
            <InfiniteScroll
                dataLength={projects.length}
                next={loadMoreData}
                hasMore={hasMore}
                loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    itemLayout="horizontal"
                    dataSource={projects}
                    renderItem={project => (
                        <List.Item className={styles.listItem}>
                            <List.Item.Meta
                                avatar={<img src={project.imageUrl} alt={project.name} className={styles.projectImage} />}
                                title={<a href={project.link} className={styles.projectName}>{project.name}</a>}
                                description={<span className={styles.projectDescription}>{project.description}</span>}
                            />
                            <Button type="primary" className={styles.downloadButton} onClick={() => showModal(project)}>More</Button>
                        </List.Item>
                    )}
                />
            </InfiniteScroll>

            <ProjectDetailsModal
                visible={isModalVisible}
                project={selectedProject}
                onOk={handleOk}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default ProjectList;
