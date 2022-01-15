import React, {useState} from 'react';

import {postsService} from "../../services/posts.service";
import Post from "../Post/Post";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    const getUserPosts = (id) => {

        postsService.getAllByUserId(id).then(value => {
            setPosts(value)
        });
    }


    return (
        <div>

            {posts.map(value => <Post

                    posts={posts}

                    // key={value.id}
                    // id={value.id}
                    // title={value.title}
                    getUserPosts={getUserPosts}

                />
            )}
        </div>
    )
};

export default Posts;

