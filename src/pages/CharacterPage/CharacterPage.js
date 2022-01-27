import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/character.service";
import Character from "../../components/Charactor/Character";
import {useParams} from "react-router-dom";


const CharacterPage = () => {
    const {id} = useParams();

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAll().then(value => setCharacters([...value.results]))

        console.log([characters])

    }, [])


    return (
        <div>
            <h5>Character Page</h5>


            {characters.map(character => <Character key={character.id} character={character} />)}


        </div>
    );
};

export {CharacterPage};