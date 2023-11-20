import IRace from "./IRace";

interface IRaceContext {
    races: IRace[];
    getAllRaces: () => void;
    getRacesByGrandPrix: (grandPrix: string) => void;
    getRacesByWinner: (winnerName: string) => void;
    addRace: (newRace: IRace, image: File) => void;
    removeRace: (id: number) => void;
    updateRace: (updatedRace: IRace, image: File) => void;
}

export default IRaceContext;