import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarThunk} from "../../store";

const Car = ({car}) => {
    const dispatch = useDispatch();
    let {id, model, price, year} = car;

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>delete</button>

        </div>
    );
};

export {Car};