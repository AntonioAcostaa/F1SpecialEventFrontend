import { useContext, useEffect, useState } from "react";
import IQuizQuestions from "../../interfaces/IQuizQuestions";
import QuizModule from "../../modules/QuizModule";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext, {
    ActivePage,
} from "../../interfaces/IActivePageContext";
import "../../assets/fonts/fonts.css";

const QuizPage = () => {
    const { setActivePage } = useContext(
        ActivePageContext
    ) as IActivePageContext;
    useEffect(() => {
        setActivePage(ActivePage.quiz);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const questions: IQuizQuestions[] = QuizModule.getQuizArray();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<{
        id: number;
        answer: string;
        isCorrect: boolean;
    } | null>(null);

    const listQuiz = () => {
        if (currentQuestionIndex >= questions.length) {
            return (
                <div className="container m-5">
                    <h2>You have reached the end of the quiz!</h2>
                    <div className="cardHeader m-5">
                        Your score is:{" "}
                        <h2 className="text-danger p-2">{score}</h2>
                    </div>
                    <div className="">
                        <button
                            className="btn btn-danger btn-primary"
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                            }}
                        >
                            Restart the Quiz
                        </button>
                    </div>
                </div>
            );
        }

        const question = questions[currentQuestionIndex];
        return (
            <div
                className="container d-flex flex-column justify-content-between"
                style={{ height: "100%" }}
            >
                <div>
                    <h3 className="header border-5 rounded shadow border-bottom border-danger mx-auto text-center p-3 m-5">
                        {question.question}
                    </h3>
                    {question.answers.map((answer) => (
                        <div
                            className="answer border-1 border-danger rounded shadow"
                            style={{
                                cursor: "pointer",
                                border: "2px solid black",
                                padding: "10px",
                                margin: "10px",
                            }}
                            onClick={() => handleAnswerClick(answer)}
                        >
                            {answer.answer}
                        </div>
                    ))}
                    {selectedAnswer && (
                        <h4 className="cardHeader m-5">
                            {selectedAnswer.isCorrect ? "Correct!" : "Wrong!"}
                            <br />
                        </h4>
                    )}
                </div>
                <div>
                    {score > 0 && (
                        <div className="cardHeader m-3 ">
                            Score: <h2 className="text-danger p-2">{score}</h2>
                        </div>
                    )}
                </div>
                <div className="d-flex justify-content-end mt-auto">
                    <button
                        className="btn btn-danger mx-1 mt-3"
                        onClick={() => {
                            if (currentQuestionIndex < questions.length) {
                                setCurrentQuestionIndex(
                                    currentQuestionIndex + 1
                                );
                                setSelectedAnswer(null);
                            }
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    };

    const handleAnswerClick = (answer: {
        id: number;
        answer: string;
        isCorrect: boolean;
    }) => {
        setSelectedAnswer(answer);
        if (answer.isCorrect) {
            setScore(score + 1);
        }
    };

    return (
        <div className="container">
            <div>
                <div className="header col-12 mx-auto rounded text-center p-4 border-top border-5 border-danger border-end mb-1 mt-3">
                    <h1>How well do you know the F1 teams?</h1>
                </div>

                <div
                    className={` rounded shadow mx-auto text-center p-3  m-5`}
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "800px",
                        border: "1px solid red",
                    }}
                >
                    {listQuiz()}
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
//Use localstorage to store the results of the quiz!
//Sjekk om vi finner en måte å bruke modules mappen
