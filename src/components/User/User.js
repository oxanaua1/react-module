import React from 'react';
import css from './User.module.css'

const User = ({user, getUser}) => {

    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <div className={css.userContent}>{id}. {name}</div>
            <button onClick={() => getUser(user)} className={css.userBtn}>User Details</button>
        </div>
    );
};

export default User;