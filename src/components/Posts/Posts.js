import {useEffect, useState} from "react";

import Post from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.json())
            .then(posts => {
                setPosts(posts)

            });

    }, []);

    return (
        <div>
            {posts.map(posts => <Post
                key={posts.id}
                id={posts.id}
                title={posts.title}
                body={posts.body}
            />)}
        </div>
    )
}

export default Posts;