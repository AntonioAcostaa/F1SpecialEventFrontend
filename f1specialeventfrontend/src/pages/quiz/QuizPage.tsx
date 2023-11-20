import { useContext, useEffect, useState } from 'react';
import IQuizQuestions from '../../interfaces/IQuizQuestions';
import QuizModule from '../../modules/QuizModule';
import { ActivePageContext } from '../../contexts/ActivePageContext';
import IActivePageContext, { ActivePage } from '../../interfaces/IActivePageContext';

const QuizPage = () => {
    const { setActivePage } = useContext(ActivePageContext) as IActivePageContext;
    useEffect(() => {
        setActivePage(ActivePage.quiz);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const questions: IQuizQuestions[] = QuizModule.getQuizArray();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<{id: number, answer: string, isCorrect: boolean} | null>(null);

    const listQuiz = () => {
        if (currentQuestionIndex >= questions.length) {
            return <div>You have reached the end of the quiz!</div>;
        }

        const question = questions[currentQuestionIndex];
        return (
            <div>
                {question.question}
                {question.answers.map((answer) => {
                    return <div style={{cursor: "pointer", border: "2px solid black", padding: "10px 8px"}} onClick={() => handleAnswerClick(answer)}>{answer.answer}</div>;
                })}
                {selectedAnswer && <div>{selectedAnswer.isCorrect ? 'Correct!' : 'Wrong!'}</div>}
            </div>
        );
    };

    const handleAnswerClick = (answer: {id: number, answer: string, isCorrect: boolean}) => {
        setSelectedAnswer(answer);
        if (answer.isCorrect) {
            setScore(score + 1);
        }
    };

    return (
        <div className='container'>
            <div className='header col-12 mx-auto rounded text-center p-4 border-top border-5 border-danger border-end mb-1 mt-3'>
                <h1>How well do you know the F1 teams?</h1>
            </div>
            {score > 0 && <div>Score: {score}</div>}
            <div style={{ display: 'flex', width: '100%', height: '800px', border: '1px solid red' }}>{listQuiz()}</div>
            <button
                onClick={() => {
                    if (currentQuestionIndex < questions.length) {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                        setSelectedAnswer(null);
                    }
                }}>
                Next
            </button>
        </div>
    );
};

export default QuizPage;
//Use localstorage to store the results of the quiz!
//Sjekk om vi finner en måte å bruke modules mappen
