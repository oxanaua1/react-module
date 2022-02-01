import React from 'react';

import css from './Dog.module.css'

const Dog = ({dog: {id, dog}, dispatch}) => {

    return (
        <div className={css.dog}>
            <div>{dog}</div>

            <button onClick={() => dispatch({type: 'DELETE_DOG', payload: {id}})}>Delete</button>


        </div>
    );
};

export {Dog};