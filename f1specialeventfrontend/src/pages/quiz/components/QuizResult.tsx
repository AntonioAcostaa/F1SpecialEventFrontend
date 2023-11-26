import styles from '../styles/quizResult.module.css';

interface QuizResultProps {
    name?: string;
    score?: number;
    endOfQuiz?: boolean;
}

const QuizResult = ({ name, score, endOfQuiz }: QuizResultProps) => {
    const storedScores = localStorage.getItem('ScoreByUser');
    const scoreArray = storedScores ? JSON.parse(storedScores) : [];

    const saveScore = {
        name: name,
        score: score,
    };

    const userExists = scoreArray.some((user: { name: string; score: number }) => user.name === saveScore.name);

    if (!userExists && endOfQuiz) {
        scoreArray.push(saveScore);
        localStorage.setItem('ScoreByUser', JSON.stringify(scoreArray));
    }

    scoreArray.sort((a: { score: number }, b: { score: number }) => b.score - a.score);

    return (
        <div>
            {scoreArray.length >= 1 && (
                <>
                    <h3 className='header border-5 rounded border-bottom border-danger mx-auto text-center p-3 mt-3'>Leaderboard</h3>
                    <div className={`shadow rounded ${styles.scores}`}>
                        <div className='d-flex flex-column '>
                            {scoreArray.map((score: { name: string }, index: number) => (
                                <h5 key={index} className='p-2'>
                                    {score.name}
                                </h5>
                            ))}
                        </div>

                        <div className='scoresFont d-flex flex-column '>
                            {scoreArray.map((score: { score: number }, index: number) => (
                                <h5 key={index} className='text-danger p-2'>
                                    {score.score}
                                </h5>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default QuizResult;
