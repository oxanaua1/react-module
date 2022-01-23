import React from 'react';
import {Link} from 'react-router-dom';
import css from './Post.module.css'

const Post = ({post}) => {

    let {id, title} = post;

    return (
        <div className={css.postWrap}>

            <Link to={id.toString()} state={post}>{id}. {title}</Link>

        </div>
    );
};

export default Post;