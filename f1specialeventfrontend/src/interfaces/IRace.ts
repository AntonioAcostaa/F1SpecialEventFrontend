interface IRace {
    id?: number;
    winnerName: string;
    winnerTime: Date;
    grandPrix: string;
    numberOfLaps: number;
    image: string | undefined;
}

export default IRace;
