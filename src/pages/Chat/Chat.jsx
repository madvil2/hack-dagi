import React from "react";
import styles from "./styles.module.scss";
import Chatbot from "../../components/ChatBot/Chatbot";

const Chat = () => {
  return (
    <div className={styles.container}>
        <Chatbot />
    </div>
  );
};

export default Chat;
