import React, { useState } from 'react';
import { Button, Radio, Space, Typography } from 'antd';
import styles from './styles.module.scss';

const { Title, Text } = Typography;

const quizQuestions = [
    {
        question: 'What is Web3?',
        options: [
            'A new version of the internet based on blockchain',
            'A new social media platform',
            'An update to HTML',
            'A programming language'
        ],
        correctAnswer: 0
    },
    {
        question: 'Which technology is most associated with Web3?',
        options: [
            'Artificial Intelligence',
            'Blockchain',
            'Virtual Reality',
            'Quantum Computing'
        ],
        correctAnswer: 1
    },
    // Add more questions here
];

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerChange = e => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            setShowResults(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setShowResults(false);
    };

    return (
        <div className={styles.quizContainer}>
            <Title level={2}>Web3 Quiz</Title>
            {showResults ? (
                <div className={styles.resultsContainer}>
                    <Title level={3}>Your Score: {score}/{quizQuestions.length}</Title>
                    <Button type="primary" onClick={handleRestart}>
                        Restart Quiz
                    </Button>
                </div>
            ) : (
                <div className={styles.questionContainer}>
                    <Title level={4}>{quizQuestions[currentQuestionIndex].question}</Title>
                    <Radio.Group onChange={handleAnswerChange} value={selectedAnswer}>
                        <Space direction="vertical">
                            {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                                <Radio key={index} value={index}>
                                    {option}
                                </Radio>
                            ))}
                        </Space>
                    </Radio.Group>
                    <Button type="primary" onClick={handleSubmit} disabled={selectedAnswer === null}>
                        Submit
                    </Button>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
