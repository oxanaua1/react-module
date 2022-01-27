import React from 'react';

const Location = ({location}) => {
    let {id, name, type, dimension} = location;
    return (
        <div>
            {id}. {name}
            <div>type: {type}, dimension: {dimension}</div>
            <hr/>
        </div>

    );
};

export default Location;