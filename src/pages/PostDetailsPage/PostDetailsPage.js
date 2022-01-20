import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import css from './PostDetailsPage.module.css'


const PostDetailsPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setPost(state)
        }
        postService.getById(id).then(value => setPost({...value}))

    }, [id])


    return (
        <div>

            {post &&
                <div className={css.wrap}>
                    <div> Id: {post.id} </div>
                    <div> userId: {post.userId} </div>
                    <div> title: {post.title} </div>
                    <div> body: {post.body} </div>

                    <button>
                        <Link to={id.toString()}> Show Post Comments</Link>
                    </button>

                </div>

            }
            <div><Outlet/></div>

        </div>
    );
};

export {PostDetailsPage};