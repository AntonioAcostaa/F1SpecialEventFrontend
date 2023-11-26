interface IDriver {     //Interfacet sikrer typesafety for IDriver-objekter, at typene alltid stemmer over ends med forventet data i backend.
    id?: number;
    name : string;
    age : number;
    nationality : string;
    points : number;
    team : string;
    image : string | undefined;
}

export default IDriver;