import React from 'react';

const Cat = ({cat}) => {
    return (
        <div>
            <div>{cat}</div>
            <button>delete</button>
        </div>
    );
};

export default Cat;