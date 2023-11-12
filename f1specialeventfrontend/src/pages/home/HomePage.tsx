const HomePage = () => {
    return (
        <div
            className="p-5 text-center bg-image rounded-3 align-items-center d-flex flex-column justify-content-center"
            style={{
                backgroundImage: `url(./src/assets/images/ferrarivredbull2.png)`,
                height: "380px",
            }}
        >
            <div
                className="mask rounded"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    width: "500px",
                }}
            >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-danger">
                        <h1 className="mb-3">Welcome to Formula 1</h1>
                        <h4 className="mb-3">Special event manager</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
