import React from 'react';
import {Link} from "react-router-dom";

import css from './User.module.css'

const User = ({user}) => {

    let {id, name} = user;

    return (
        <div className={css.userWrapper}>
            <Link to={id.toString()} state={user}>{id}. {name}</Link>
        </div>
    );
};

export default User;
