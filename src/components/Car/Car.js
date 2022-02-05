import React from 'react';
import {useDispatch} from "react-redux";
import {carToUpdate, deleteCarById} from "../../store/car.slice";

const Car = ({car}) => {

    let {id, model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>{id}. Model: {model} - Price: {price} - Year: {year}</div>
                <button onClick={() => dispatch(carToUpdate({car}))}>Update</button>
                <button onClick={() => dispatch(deleteCarById({id}))}>Delete</button>
            </div>

        </div>
    );
};

export {Car};