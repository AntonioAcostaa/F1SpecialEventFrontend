interface ITeam {        //Interfacet sikrer typesafety for ITeam-objekter, at typene alltid stemmer over ends med forventet data i backend.
    id?: number;
    manufacturer: string;
    driver1: string;
    driver2: string;
    points: number;
    image: string | undefined;
}

export default ITeam;