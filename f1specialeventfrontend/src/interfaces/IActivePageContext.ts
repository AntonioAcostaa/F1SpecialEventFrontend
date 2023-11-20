interface IActivePage {
    activePage: ActivePage;
    setActivePage: (activePage: ActivePage) => void;
}

export default IActivePage;

export enum ActivePage {
    home, 
    drivers, 
    teams, 
    races,
    quiz,
}