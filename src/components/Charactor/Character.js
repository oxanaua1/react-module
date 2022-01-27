import React from 'react';
import {Link} from "react-router-dom";

const Character = ({character}) => {
    let {id, name, image,status,species} = character
    return (
        <div>
            {id}. {name} <img src={image} alt="img" width={'100px'}/>
            status: {status}; species: {species}.
            <Link to={id.toString()}>Details</Link>
            <Link to={`${id}/location`}>Details Location</Link>

            <hr/>
        </div>
    );
};

export default Character;

