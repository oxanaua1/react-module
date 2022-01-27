import React from 'react';

const Episode = ({episode}) => {
    let {id, name, air_date, species} = episode;
    return (
        <div>
            <h5>{id}. {name}</h5>
            <p>Air Date: {air_date}
                Episode Number: {episode.episode}
                Species: {species}</p>
            <hr/>

        </div>
    );
};

export default Episode;