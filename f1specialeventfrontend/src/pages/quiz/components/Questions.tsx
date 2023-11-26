import { useState } from 'react';
import Footer from '../../../components/shared/Footer';
import IQuizQuestions from '../../../interfaces/IQuizQuestions';
import { selectedAnswerType } from '../QuizPage';
import styles from '../styles/quizQuestions.module.css';

interface questionsProps {
    question: IQuizQuestions;
    handleAnswerClick: (answer: { id: number; answer: string; isCorrect: boolean }) => void;
    selectedAnswer: selectedAnswerType | null;
    setSelectedAnswer: (selectedAnswerType: selectedAnswerType | null) => void;
    score: number;
    currentQuestionIndex: number;
    setCurrentQuestionIndex: (currentQuestionIndex: number) => void;
    questionsLength: number;
    blockAnswer: boolean;
    setblockAnswer: (blockAnswer: boolean) => void;
}

const Questions = ({
    question,
    handleAnswerClick,
    selectedAnswer,
    setSelectedAnswer,
    score,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    questionsLength,
    blockAnswer,
    setblockAnswer,
}: questionsProps) => {
    const [clickCount, setClickCount] = useState(0);
    console.log(clickCount);
    return (
        <>
            <div className='container d-flex flex-column justify-content-between' style={{ height: '100%' }}>
                <div>
                    <h3 className='border-5 rounded shadow border-bottom border-danger mx-auto text-center p-3 m-5'>{question.question}</h3>
                    <div className={styles.answersGrid}>
                        {question.answers.map((answer) => (
                            <div
                                key={answer.id}
                                className={`border border-2 border-danger rounded shadow ${styles.answer}`}
                                style={{
                                    cursor: 'pointer',
                                    padding: '30px',
                                    margin: '10px',
                                }}
                                onClick={() => {
                                    setClickCount(clickCount + 1);
                                    handleAnswerClick(answer);
                                }}>
                                <h5>{answer.answer}</h5>
                            </div>
                        ))}
                    </div>
                    {selectedAnswer && (
                        <h4 className='m-5'>
                            {selectedAnswer.isCorrect ? 'Correct!' : 'Wrong!'}
                            {blockAnswer && clickCount > 1 && <span> You have already answered this question!</span>}
                            <br />
                        </h4>
                    )}
                </div>
                <div>
                    <div className='cardHeader m-3 '>
                        Score: <h2 className='text-danger p-2'>{score}</h2>
                    </div>
                </div>
                <div className='d-flex justify-content-end mt-auto'>
                    <button
                        className='btn btn-danger mx-1 mt-3'
                        onClick={() => {
                            if (currentQuestionIndex < questionsLength) {
                                setCurrentQuestionIndex(currentQuestionIndex + 1);
                                setSelectedAnswer(null);
                                setblockAnswer(false);
                                setClickCount(0);
                            }
                        }}>
                        Next
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Questions;
