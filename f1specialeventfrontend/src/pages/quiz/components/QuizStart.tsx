import Footer from "../../../Components/shared/Footer";
import QuizResult from "./QuizResult";

interface QuizStartProps {
    name: string;
    setName: (name: string) => void;
    setIsQuizStarted: (isQuizStarted: boolean) => void;
}

const QuizStart = ({ name, setName, setIsQuizStarted }: QuizStartProps) => {
    const endOfQuiz = false;

    const doesUserExist = () => {
        let userExists = false;
        const storedScores = localStorage.getItem("ScoreByUser");
        const scoreArray = storedScores ? JSON.parse(storedScores) : [];
        const lookForUser = scoreArray.some(
            (user: { name: string; score: number }) => user.name === name
        );
        if (lookForUser) {
            userExists = true;
        }
        return userExists;
    };

    return (
        <>
            <div className="container">
                <div className="col-12 mx-auto rounded text-center p-4 mb-1 mt-3 d-flex flex-column justify-content-between h-100">
                    <div>
                        <h3 className="">Enter your name to start the quiz</h3>
                        <br />
                        <form
                            className="d-flex flex-column justify-content-center align-items-center"
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (name !== "" && !doesUserExist()) {
                                    setIsQuizStarted(true);
                                }
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {doesUserExist() && (
                                <div>
                                    <h5 className="text-danger p-2">
                                        User already exists!
                                    </h5>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn btn-danger m-2"
                            >
                                Start Quiz
                            </button>
                        </form>
                    </div>
                    <QuizResult endOfQuiz={endOfQuiz} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default QuizStart;
