import React, {useEffect, useState} from 'react';
import {episodeService} from "../../services/episode.service";
import Episode from "../../components/Episode/Episode";

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState([]);
    useEffect(() => {
        episodeService.getAll().then(value => setEpisodes([...value.results]))

    }, [])

    return (
        <div>
            <h5>Episode Page</h5>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}


        </div>
    );
};

export {EpisodePage};