import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div>
            <h5>{id}.{name}. {email}</h5>
            <div>{body}</div>
            <hr/>

        </div>
    );
};

export {Comment};