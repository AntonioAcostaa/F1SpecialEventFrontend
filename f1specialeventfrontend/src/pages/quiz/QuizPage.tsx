import { useContext, useEffect, useState } from "react";
import IQuizQuestions from "../../interfaces/IQuizQuestions";
import QuizModule from "../../modules/QuizModule";
import { ActivePageContext } from "../../contexts/ActivePageContext";
import IActivePageContext, {
    ActivePage,
} from "../../interfaces/IActivePageContext";
import "../../assets/fonts/fonts.css";
import Footer from "../../Components/shared/Footer";
import Questions from "./components/Questions";
import QuizStart from "./components/QuizStart";
import QuizEnd from "./components/QuizEnd";

export interface selectedAnswerType {
    id: number;
    answer: string;
    isCorrect: boolean;
}

const QuizPage = () => {
    const { setActivePage } = useContext(
        ActivePageContext
    ) as IActivePageContext;

    useEffect(() => {
        setActivePage(ActivePage.quiz);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const questions: IQuizQuestions[] = QuizModule.getQuizArray();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [blockAnswer, setBlockAnswer] = useState<boolean>(false);

    const [selectedAnswer, setSelectedAnswer] =
        useState<selectedAnswerType | null>(null);
    const question = questions[currentQuestionIndex];

    const handleAnswerClick = (answer: {
        id: number;
        answer: string;
        isCorrect: boolean;
    }) => {
        if (!blockAnswer) {
            setSelectedAnswer(answer);
            if (answer.isCorrect) {
                setScore(score + 1);
            }
        } else {
            return;
        }
        setBlockAnswer(true);
    };

    return (
        <>
            <div className="container">
                <div>
                    <header className="header col-12 mx-auto rounded text-center p-4 border-top border-5 border-danger border-end mb-1 mt-3">
                        <h1>How well do you know the F1 teams?</h1>
                    </header>

                    <section
                        className={`rounded mx-auto text-center p-3`}
                        style={{
                            display: "flex",
                            width: "100%",
                        }}
                    >
                        {!isQuizStarted ? (
                            <QuizStart
                                name={name}
                                setName={setName}
                                setIsQuizStarted={setIsQuizStarted}
                            />
                        ) : currentQuestionIndex >= questions.length ? (
                            <QuizEnd
                                name={name}
                                setName={setName}
                                score={score}
                                setScore={setScore}
                                setIsQuizStarted={setIsQuizStarted}
                                setCurrentQuestionIndex={
                                    setCurrentQuestionIndex
                                }
                            />
                        ) : isQuizStarted &&
                          currentQuestionIndex <= questions.length ? (
                            <Questions
                                question={question}
                                handleAnswerClick={handleAnswerClick}
                                selectedAnswer={selectedAnswer}
                                setSelectedAnswer={setSelectedAnswer}
                                score={score}
                                currentQuestionIndex={currentQuestionIndex}
                                setCurrentQuestionIndex={
                                    setCurrentQuestionIndex
                                }
                                questionsLength={questions.length}
                                blockAnswer={blockAnswer}
                                setblockAnswer={setBlockAnswer}
                            />
                        ) : (
                            <QuizStart
                                name={name}
                                setName={setName}
                                setIsQuizStarted={setIsQuizStarted}
                            />
                        )}
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default QuizPage;
