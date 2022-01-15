import React from 'react';

import css from './Post.module.css'

const Post = ({post}) => {
    const {id, userId, title, body}=post
    return (
        <div className={css.wrap}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>

        </div>
    );
};

export default Post;