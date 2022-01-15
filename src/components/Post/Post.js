import React from 'react';

const Post = ({props}) => {

    const {id, title} = props
    return (
        <div>
            {id} {title}
        </div>
    );
};

export default Post;