import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/character.service";
import {Link, useParams} from "react-router-dom";

const CharacterDetailsPage = () => {
    const [character, setCharacter] = useState();
    const {id} = useParams();

    useEffect(() => {
        characterService.getById(id).then(value => setCharacter({...value}))
        console.log(character)

    }, [id])

    return (
        <div>
            <Link to={id.toString()}/>
            character && <div>

            {character.id}
            {character.name}
        </div>


        </div>
    );
};

export {CharacterDetailsPage};