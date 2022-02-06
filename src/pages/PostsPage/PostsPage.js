import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/post.slice";
import {Post} from "../../components";

const PostsPage = () => {
    const {posts, status, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())

    }, [])

    return (
        <div>
            {status}
            {posts.map(post => <Post key={post.id} post={post}/>)}
            {error}

        </div>
    );
};

export {PostsPage};