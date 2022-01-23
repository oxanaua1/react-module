import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from 'react-router-dom';

import {userService} from '../../services/user.service';
import Album from '../../components/Album/Album';


const AlbumsPage = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userService.getAlbumsByUserId(id).then(value => setAlbums([...value]))

    }, [id])


    return (
        <div>

            {albums.map(album => <Album key={album.id} id={id} album={album}/>)}

            <Outlet/>


        </div>
    );
};

export {AlbumsPage};