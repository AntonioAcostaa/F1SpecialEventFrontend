import { useEffect, useState } from "react";
import IDriver from "../../interfaces/IDriver";
import DriversService from "../../services/DriversService";
import DriverList from "./components/DriverList";

const DriversPage = () => {
    const [drivers, setDrivers] = useState<IDriver[]>([]);

    const [id, setId] = useState(Number);
    const [name, setName] = useState("");
    const [age, setAge] = useState(Number);
    const [nationality, setNationality] = useState("");
    const [image, setImage] = useState("");

    const handleChange = (e) => {
        switch (e.currentTarget.name) {
            case "id":
                setId(e.currentTarget.value);
                break;
            case "name":
                setName(e.currentTarget.value);
                break;
            case "age":
                setAge(e.currentTarget.value);
                break;
            case "nationality":
                setNationality(e.currentTarget.value);
                break;
            case "image":
                setImage(e.currentTarget.value);
                break;
        }
    };
    const saveDriver = () => {
        const newDriver = {
            id: id,
            name: name,
            age: age,
            nationality: nationality,
            image: image,
        };
        DriversService.postDriver(newDriver);
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
        <div className="container">
            <section>
                <div className="col-12 mx-auto ">
                    <div className="border shadow p-3 rounded h-100  text-center">
                        <h3>Legg til ny sjåfør</h3>
                        <div>
                            <label>id</label>
                            <input
                                name="id"
                                onChange={handleChange}
                                type="text"
                            />
                        </div>
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
                                type="text"
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
                            <label>Bilde</label>
                            <input
                                name="image"
                                onChange={handleChange}
                                type="file"
                            />
                        </div>
                        <input
                            onClick={saveDriver}
                            type="button"
                            value="Lagre Informasjon"
                        />
                    </div>

                    <div className="border shadow p-3 rounded">
                        {drivers.length !== 0 && (
                            <DriverList drivers={drivers} />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DriversPage;
