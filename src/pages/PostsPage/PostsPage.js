import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../../components/Post/post";
import {Outlet, useSearchParams} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        postService.getAll().then(value => {
            const title = query.get('title');                                //ветягти інформацію з урли
            let filter = [...value]
            if (title) {                                                    //робити перевірку якщо велю є, то буду фільтрувати
                filter = value.filter(post => post.title.includes(title))   //витягувати пост, брати його тайтл і перевіряти
            }                                                                //чи в ньому є те, що введено в урлі
            setPosts(filter)
            // setPosts([...value]) - до форми
        })
    }, [query]) //передаючи в депенденсі квері, озн. що воно буде оновлюватися

    const submit = (e) => {
        e.preventDefault()
        setQuery({title: e.target.search.value}) //при натисканні на кнопку буду сетити квері парамси в свою урлу
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="search" name={'search'}/>
                <button>Search</button>
            </form>

            <h1>Posts</h1>
            <div><Outlet/></div>
            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export default PostsPage;