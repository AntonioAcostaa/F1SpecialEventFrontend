interface IRace {
    //Interfacet sikrer typesafety for IRace-objekter, at typene alltid stemmer over ends med forventet data i backend.
    id?: number;
    winnerName: string;
    winnerTime: Date;
    grandPrix: string;
    numberOfLaps: number;
    image: string | undefined;
}

export default IRace;
