import React from 'react';

import css from './User.module.css'

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={css.wrapper}>
            <h3>{id}.{name} </h3>
            <div> Username: {username}, email: {email}</div>

        </div>
    );
};

export default User;