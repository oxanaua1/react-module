import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {


    let {albumId, id, title, url} = photo;

    return (
        <div>

            <div className={css.wrap}>
                "albumId": {albumId},
                "id": {id},
                "title": {title},
                <img src={url} alt="userPhoto" width={'200px'}/>
            </div>


        </div>
    );
};

export default Photo;