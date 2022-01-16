import React from 'react';

import './PostStyles.css';

const Post = (props) => {

    const {id, title} = props
    return (
        <div className={'Wrap'}>
           Post Id: {id}) Title: {title}
        </div>
    );
};

export default Post;