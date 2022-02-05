import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Car} from '../Car/Car';
import {getAllCars} from '../../store/car.slice'

const Cars = () => {
    const {cars, status, error} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars())

    }, [])

    return (
        <div>
            {status}
            {error && <div>{JSON.stringify(error)}</div>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};