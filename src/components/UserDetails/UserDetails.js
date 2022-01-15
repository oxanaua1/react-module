import React from 'react';

import css from './UserDetails.module.css'

const UserDetails = ({user, getUserId}) => {
    const {
        id, name, username, email, address: {street}, address: {suite},
        address: {city}
    } = user;

    return (
        <div>
            <div className={css.userDetailsContent}>
                <div>
                    <h3>{id} {name} </h3>
                    <h4>{username} {email}</h4>
                    <div>{street} {suite} {city}</div>
                </div>
                <button onClick={() => getUserId(id)} className={css.userDetailsBtn}>User's Posts</button>
            </div>

        </div>
    );
};

export default UserDetails;