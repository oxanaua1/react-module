import React from 'react';

import css from './Comment.module.css'

const Comment = ({comment}) => {

    let {id, postId, name, email, body} = comment
    return (
        <div>
            <div className={css.wrap}>
                <h5>Id: {id}, postId: {postId}, Name: {name}, Email: {email}</h5>
                <p>Body: {body}</p>
            </div>

        </div>
    );
};

export default Comment;