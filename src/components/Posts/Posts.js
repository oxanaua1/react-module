import React, {useEffect, useState} from 'react';
import User from "../User/User";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        // const getUserPosts = () => {  }

            fetch(`https://jsonplaceholder.typicode.com/${User.id}/posts`)
                .then(value => value.json())
                .then(value => {
                    setPosts(value)
                    console.log(value);
                });







    }, [])


    return (
        <div>

            {posts.map(value =>
                <div>
                    key={value.id}
                    id={value.id}
                    title={value.title}
                    {/*getUserPosts={getUserPosts}*/}

                </div>
            )}
        </div>
    )
};

export default Posts;

