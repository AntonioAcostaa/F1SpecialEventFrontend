const Footer = () => {
    return (
        <footer className='footer border-top border-danger border-2 bg-dark text-white' style={{position: "fixed", bottom: "0", left: "0", width: "100%", height: "40px", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <div>
                <span>&copy; 2023. Laget av to studenter. Powered by React TSX, .NET</span>
            </div>
        </footer>
    );
};

export default Footer;
