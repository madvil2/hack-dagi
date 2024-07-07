import React from 'react';
import { Modal, Button } from 'antd';
import styles from './styles.module.scss';

const ProjectDetailsModal = ({ visible, project, onOk, onCancel }) => {
    return (
        <Modal
            title={project ? project.name : 'Project Details'}
            visible={visible}
            style={{ top: 20 }}
            onOk={onOk}
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Return
                </Button>,
                <Button key="submit" type="primary" onClick={onOk}>
                    Ok
                </Button>,
            ]}
        >
            {project && (
                <div>
                    <img src={project.imageUrl} alt={project.name} className={styles.modalImage} />
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
                </div>
            )}
        </Modal>
    );
};

export default ProjectDetailsModal;
