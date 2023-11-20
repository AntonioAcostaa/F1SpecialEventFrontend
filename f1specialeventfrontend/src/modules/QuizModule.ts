import IQuizQuestions from "../interfaces/IQuizQuestions";

const QuizModule = (() => {
    const quizArray: IQuizQuestions[] = [
        {
            id: 1,
            question: "What team does Lewis Hamilton drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Mercedes",
                    isCorrect: true,
                },
                {
                    id: 2,
                    answer: "Red Bull",
                    isCorrect: false,
                },
                {
                    id: 3,
                    answer: "Ferrari",
                    isCorrect: false,
                },
                {
                    id: 4,
                    answer: "McLaren",
                    isCorrect: false,
                },
            ],
        },
        {
            id: 2,
            question: "What team does Max Verstappen drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Mercedes",
                    isCorrect: false,
                },
                {
                    id: 2,
                    answer: "Red Bull",
                    isCorrect: true,
                },
                {
                    id: 3,
                    answer: "Ferrari",
                    isCorrect: false,
                },
                {
                    id: 4,
                    answer: "McLaren",
                    isCorrect: false,
                },
            ],
        },
        {
            id: 3,
            question: "What team does Carlos Sainz drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Williams",
                    isCorrect: false,
                },
                {
                    id: 2,
                    answer: "Alpine",
                    isCorrect: false,
                },
                {
                    id: 3,
                    answer: "Ferrari",
                    isCorrect: true,
                },
                {
                    id: 4,
                    answer: "Aston Martin",
                    isCorrect: false,
                },
            ],
        },
        {
            id: 4,
            question: "What team does Oscar Piastri drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Mercedes",
                    isCorrect: false,
                },
                {
                    id: 2,
                    answer: "Red Bull",
                    isCorrect: false,
                },
                {
                    id: 3,
                    answer: "Ferrari",
                    isCorrect: false,
                },
                {
                    id: 4,
                    answer: "McLaren",
                    isCorrect: true,
                },
            ],
        },
        {
            id: 5,
            question: "What team does Logan Sargeant drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Aston Martin",
                    isCorrect: false,
                },
                {
                    id: 2,
                    answer: "Red Bull",
                    isCorrect: true,
                },
                {
                    id: 3,
                    answer: "Ferrari",
                    isCorrect: false,
                },
                {
                    id: 4,
                    answer: "Williams",
                    isCorrect: true,
                },
            ],
        },
        {
            id: 6,
            question: "What team does Yūki Tsunoda drive for?",
            answers: [
                {
                    id: 1,
                    answer: "Haas",
                    isCorrect: false,
                },
                {
                    id: 2,
                    answer: "Red Bull",
                    isCorrect: false,
                },
                {
                    id: 3,
                    answer: "Alpine",
                    isCorrect: false,
                },
                {
                    id: 4,
                    answer: "AlphaTauri",
                    isCorrect: true,
                },
            ],
        },
    ];

    const getQuizArray = () => {
        return structuredClone(quizArray);
    };

    const checkAnswer = (questionId: number, answerId: number) => {
        const question = quizArray.find(
            (question) => question.id === questionId
        );
        const answer = question?.answers.find(
            (answer) => answer.id === answerId
        );
        return answer?.isCorrect;
    };

    return {
        getQuizArray,
        checkAnswer,
    };
})();

export default QuizModule;
