import React from 'react';

const Car = ({car, getCarId}) => {

    let {id, model, price, year} = car;

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px', gap: '20px'}}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => getCarId(id)}>delete</button>

        </div>
    );
};

export {Car};