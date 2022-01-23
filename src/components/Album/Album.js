import React from 'react';
import {Link} from 'react-router-dom';

import css from './Album.module.css'


const Album = ({album}) => {

    let {userId, id, title} = album;

    return (
        <div>
            <div className={css.wrap}>
                <div>Album-id:{id}</div>
                <div>userId: {userId} title: {title}</div>

                <button className={css.btn}>
                    <Link to={`${id}/photos`}>Album photos</Link>
                </button>
            </div>
            <hr/>
        </div>
    );
};

export default Album;