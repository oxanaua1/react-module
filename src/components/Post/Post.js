import React from 'react';

const Post = ({post}) => {

    const {id, title, body} = post;

    return (
        <div>
            <h5>{id}.{title}</h5>
            <div>{body}</div>
            <hr/>

        </div>
    );
};

export {Post};