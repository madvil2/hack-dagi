import firstScam from "../assets/images/Qiuz/1/scam.jpeg";
import firstLegit from "../assets/images/Qiuz/1/legit.jpeg";
import notcoinLegit from "../assets/images/Qiuz/2/legit.jpeg";
import notcoinScam from "../assets/images/Qiuz/2/scam.jpeg";
import cloudLegit from "../assets/images/Qiuz/3/legit.jpeg";
import cloudScam from "../assets/images/Qiuz/3/scam.jpg";

export const quiz = {
    "quizTitle": "Quiz on Web3 and Scam Identification",
    "quizSynopsis": "Identify various types of scams and learn why using our application can help you stay safe.",
    "nrOfQuestions": "5",  // Updated number of questions
    "questions": [
        {
            "question": "Below are two screenshots of the Tonkeeper wallet website. One is legitimate and the other is a phishing attempt. Identify the phishing website.",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                firstScam,
                firstLegit
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct! The first image is a phishing website.",
            "messageForIncorrectAnswer": "Incorrect. Please try again.",
            "explanation": "Phishing websites often look very similar to legitimate ones but may have slight differences in URLs or content. Always double-check the URL and be cautious.",
            "point": "20"
        },
        {
            "question": "Below are two screenshots of a Notcoin page in Telegram. One is legitimate and the other is a phishing attempt. Identify the phishing website.",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                notcoinScam,
                notcoinLegit
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct! The first image is a phishing website.",
            "messageForIncorrectAnswer": "Incorrect. Please try again.",
            "explanation": "Phishing websites often look very similar to legitimate ones but may have slight differences in URLs or content. Always double-check the URL and be cautious.",
            "point": "20"
        },
        {
            "question": "Below are two screenshots of Cloud wallets. One is legitimate and the other is a phishing attempt. Identify the phishing website.",
            "questionType": "photo",
            "answerSelectionType": "single",
            "answers": [
                cloudScam,
                cloudLegit
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": "Correct! The first image is a phishing website.",
            "messageForIncorrectAnswer": "Incorrect. It's not always easy to identify scams. This is why you need our application to help protect you.",
            "explanation": "Scam websites can be very convincing and difficult to differentiate from legitimate ones. Using advanced tools and staying informed can help you avoid these scams.",
            "point": "20"
        }
    ]
};
