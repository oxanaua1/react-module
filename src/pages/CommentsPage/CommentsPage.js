import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import {Comment} from "../../components";


const CommentsPage = () => {

    const {comments, status, error} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())

    }, [])

    return (
        <div>
            {status}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            {error}


        </div>
    );
};

export {CommentsPage};