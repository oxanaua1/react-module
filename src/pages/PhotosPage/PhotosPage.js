import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {albumService} from '../../services/album.service';
import Photo from '../../components/Photo/Photo';

const PhotosPage = () => {

    const {albumId} = useParams();

    const [photos, setphotos] = useState([]);


    useEffect(() => {

        albumService.getByIdPhotos(albumId).then(value => setphotos([...value]))

    }, [albumId])


    return (
        <div>

            {photos.map(photo => <Photo key={photo.id} albumId={albumId} photo={photo}/>)}

        </div>
    );
};

export {PhotosPage};