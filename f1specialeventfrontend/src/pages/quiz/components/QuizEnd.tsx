import Footer from '../../../components/shared/Footer';
import QuizResult from './QuizResult';

interface QuizEndProps {
    name: string;
    setName: (name: string) => void;
    score: number;
    setScore: (score: number) => void;
    setIsQuizStarted: (isQuizStarted: boolean) => void;
    setCurrentQuestionIndex: (currentQuestionIndex: number) => void;
}

const QuizEnd = ({ name, setName, score, setScore, setCurrentQuestionIndex, setIsQuizStarted }: QuizEndProps) => {

    const endOfQuiz = true;

    return (
        <>
            <div className='container d-flex flex-column justify-content-between'>
                <div>
                    <h2>You have reached the end of the quiz!</h2>
                    <div className='m-5'>
                        <h5>Your score is:</h5> <h2 className='text-danger p-2'>{score}</h2>
                    </div>
                    <div className='m-3'>
                        <button
                            className='btn btn-danger btn-primary'
                            onClick={() => {
                                setIsQuizStarted(false);
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setName("")
                            }}>
                            Restart the Quiz
                        </button>
                    </div>
                </div>
                <QuizResult name={name} score={score} endOfQuiz={endOfQuiz}/>
            </div>
            <Footer />
        </>
    );
};

export default QuizEnd;
