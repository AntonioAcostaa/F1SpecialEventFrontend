interface IQuizQuestions 
    {
        id: number;
        question: string;
        answers: [
            {
                id: number;
                answer: string;
                isCorrect: boolean;
            },
            {
                id: number;
                answer: string;
                isCorrect: boolean;
            },
            {   
                id: number;
                answer: string;
                isCorrect: boolean;
            },
            {
                id: number;
                answer: string;
                isCorrect: boolean;
            },
        ]
    }

    export default IQuizQuestions;