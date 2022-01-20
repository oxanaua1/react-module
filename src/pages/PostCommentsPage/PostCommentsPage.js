import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Outlet} from "react-router-dom";

import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";


const PostCommentsPage = ({}) => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {

        postService.getCommentsByPostId(id).then(value => setComments([...value]))
        console.log(comments)


    }, [id])

    return (
        <div>
            <div><Outlet/></div>
            <div>{comments.map(comment => <Comment key={comment.id} comment={comment}/>)}</div>

        </div>
    );
};

export {PostCommentsPage};