import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (state) {               //умова: якщо у стейті щось є, то я буду сетати пост і сетати у нього цей стейт
            setPost(state)       // інакше буду звертатися до сервера
            return
        }
        postService.getById(id).then(value => setPost({...value}))

    }, []);
    const toHome = () => {
        navigate('/')      //перехід на сторінку хоум (якщо прописати /users то перехід на юзерс)
    }
    const back = () => {
        navigate(-1)       //перехід на одну дію назад (1 вперед)
    }                      //Доречний коли потрібно перенаправити кудись, коли прийшла помилка, в ін випадках
                           //використовувати Link
                            // navigate('/', {replace: true}) - вся історія після переходу затреться


    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={back}>Back</button>


            {
                post &&
                <div>
                    <div> Id: {post.id} </div>
                    <div> userId: {post.userId} </div>
                    <div> title: {post.title} </div>
                    <div> body: {post.body} </div>
                </div>
            }
        </div>
    );
};

export default SinglePostPage;