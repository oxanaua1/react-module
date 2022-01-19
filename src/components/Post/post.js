import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    let {id, title} = post
    return (
        <div>
            <div>
                <Link to={id.toString()} state={post}><h5>Id{id}. Title:{title}</h5></Link>
            </div>
        </div>
    );
};

export default Post;