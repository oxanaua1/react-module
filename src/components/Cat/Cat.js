import React from 'react';

import css from './Cat.module.css'

const Cat = ({cat: {id, cat}, dispatch}) => {

    return (
        <div className={css.cat }>
            <div>{cat}</div>
            <button onClick={() => dispatch({type: 'DELETE_CAT', payload: {id}})}>Delete</button>
        </div>
    );
};

export {Cat};