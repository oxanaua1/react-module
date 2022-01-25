import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";

//(6) Отримуємо фю trigger, де записано оновлений КАР
const Cars = ({trigger}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))


    }, [trigger])
//(7) і кажу, що useEffect депенд. заледать від цього trigger, якщо він змінюється useEffect виконується ще раз

    return (
        <div>
            {cars.map(car => < Car key={car.id} car={car}/>)}

        </div>
    );
};


export default Cars;