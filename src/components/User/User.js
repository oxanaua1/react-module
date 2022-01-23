import React from 'react';
import {Link} from 'react-router-dom';

import css from './User.module.css'


const User = ({user}) => {

    let {id, name} = user;

    return (
        <div className={css.userWrapper}>

            <h4>{id}. {name}</h4>
            <button className={css.btn}>
                <Link to={id.toString()} state={user}>Show user's details</Link>
            </button>
            <hr/>
            <button className={css.btn}>
                <Link to={`${id}/albums`}>Albums</Link>
            </button>

        </div>
    );
};

export default User;
