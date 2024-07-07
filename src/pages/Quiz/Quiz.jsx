import React from 'react';
import Quiz from 'react-quiz-component';
import { quiz } from '../../utils/quizData'; // Ensure this path is correct
import styles from './styles.module.scss';

const QuizPage = () => {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.quizContainer}>
                <Quiz
                    quiz={quiz}
                    shuffle={true}
                    showInstantFeedback={true}
                    continueTillCorrect={true}
                    onComplete={(obj) => console.log(obj)}
                />
            </div>
        </div>
    );
};

export default QuizPage;
