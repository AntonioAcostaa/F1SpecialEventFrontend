import { ChangeEvent, useEffect, useState } from "react";
import IDriver from "../../interfaces/IDriver";
import DriversService from "../../services/DriversService";
import DriverList from "./components/DriverList";
import MediaService from "../../services/MediaService";

const DriversPage = () => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState<number>(0);
    const [nationality, setNationality] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case "name":
                setName(e.currentTarget.value);
                break;
            case "age":
                setAge(parseInt(e.currentTarget.value));
                break;
            case "nationality":
                setNationality(e.currentTarget.value);
                break;
            case "image":
                if (e.currentTarget.files === null) return;
                setImage(e.currentTarget.files[0]);
                break;
        }
    };

    const saveDriver = () => {
        const newDriver = {
            name: name,
            age: age,
            nationality: nationality,
            image: image?.name,
        };
        MediaService.postDriver(newDriver, image);
        getAllDrivers();
    };

    const getAllDrivers = () => {
        DriversService.getAllDrivers()
            .then((response) => {
                setDrivers(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllDrivers();
    }, []);

    return (
        <>
            <div className="container p-5">
                <div className="col-12 mx-auto text-center rounded p-5 border-top border-5 border-danger border-end m-5">
                    <h1>F1 Drivers 2023</h1>
                </div>
                <section>
                    <h3>Add new driver</h3>
                    <div>
                        <label>Name</label>
                        <input
                            name="name"
                            onChange={handleChange}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Age</label>
                        <input
                            name="age"
                            onChange={handleChange}
                            type="number"
                        />
                    </div>
                    <div>
                        <label>Nationality</label>
                        <input
                            name="nationality"
                            onChange={handleChange}
                            type="text"
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input
                            name="image"
                            onChange={handleChange}
                            type="file"
                        />
                    </div>
                    <input
                        onClick={saveDriver}
                        type="button"
                        value="Lagre serie"
                    />
                </section>
                <div className="container">
                    {drivers.length !== 0 && <DriverList drivers={drivers} />}
                </div>
            </div>
        </>
    );
};

export default DriversPage;