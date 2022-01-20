import React from 'react';

import css from './UserPosts.module.css'

const UserPosts = ({userPost}) => {

    let {id, userId, title, body} = userPost

    return (
        <div className={css.UserPostsWrapper}>
            <div>Post Id {id}</div>
            <div> userId: {userId} </div>
            <div> title: {title} </div>
            <div> body: {body} </div>

        </div>
    );
};

export default UserPosts;