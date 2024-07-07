import React from 'react';
import { Form, Input, Button, Radio, notification } from 'antd';
import styles from './styles.module.scss';

const Contribute = () => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('Form submitted:', values);

        notification.success({
            message: 'Submission Successful',
            description: 'Your project has been submitted for review.'
        });

        form.resetFields();
    };

    return (
        <div className={styles.container}>
            <h1>Write a review for a project</h1>
            <Form
                form={form}
                className={styles.form}
                onFinish={handleSubmit}
            >
                <Form.Item
                    label="Name of the project"
                    name="projectName"
                    rules={[{ required: true, message: 'Please input the project name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Tag"
                    name="tag"
                    rules={[{ required: true, message: 'Please select a tag!' }]}
                >
                    <Radio.Group>
                        <Radio value="Scam">Scam</Radio>
                        <Radio value="Fake">Fake</Radio>
                        <Radio value="Phishing">Phishing</Radio>
                        <Radio value="Shitcoin">Shitcoin</Radio>
                        <Radio value="Legit">Legit</Radio>
                        <Radio value="NoData">Not enough data</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Contribute;
