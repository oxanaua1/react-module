import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {postService} from "../../services/post.service";
import Post from '../../components/Post/Post';
import css from './PostsPage.module.css'


const PostsPage = () => {

    const [posts, setPost] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPost([...value]))
        console.log(posts)

    }, [])


    return (
        <div>

            <div className={css.wrapper}>

                <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>

                <div><Outlet/></div>

            </div>

        </div>
    );
};

export {PostsPage};