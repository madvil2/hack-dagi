import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import styles from './styles.module.scss';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const chatWithGPT3 = async (userInput) => {
        const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_CHAT_GPT_API_KEY}`
        };

        const data = {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are ScamGPT, an AI assistant specializing in Web3 security. Your role is to onboard users to Web3, educate them about potential risks, and teach them how to identify scam projects. Using advanced AI and a comprehensive database, you provide detailed information about Web3 projects, analyze web page content, and assess on-chain data to determine scam risks. Through a decentralized user review system and interactive tools, you ensure users have the knowledge and resources to navigate the decentralized web safely. Whether it\'s answering questions about projects, offering tips, or guiding through security checks, you empower users to explore Web3 confidently and securely.'
                },
                {
                    role: 'user',
                    content: userInput
                }
            ]
        };

        try {
            const response = await axios.post(apiEndpoint, data, { headers });
            return response.data.choices[0].message.content.trim();
        } catch (error) {
            console.error('Error communicating with the API:', error.message);
            return 'Sorry, I encountered an error.';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput('');
        const aiMessage = { text: '...', user: false };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);

        const response = await chatWithGPT3(input);
        const newAiMessage = { text: response, user: false };
        setMessages((prevMessages) => [...prevMessages.slice(0, -1), newAiMessage]);
    };

    return (
        <div className={styles.chatbotContainer}>
            <div className={styles.chatbotMessages}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`${styles.message} ${message.user ? styles.userMessage : styles.aiMessage}`}
                    >
                        {message.text}
                    </div>
                ))}
            </div>
            <form className={styles.chatbotInputForm} onSubmit={handleSubmit}>
                <Input
                    className={styles.chatbotInput}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <Button className={styles.chatbotButton} type="primary" htmlType="submit">Send</Button>
            </form>
        </div>
    );
};

export default Chatbot;
