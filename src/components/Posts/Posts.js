import React from 'react';


import Post from "../Post/Post";


const Posts = ({posts}) => {



    return (
        <div>

            {posts.map(value => <Post

                    key={value.id}
                    id={value.id}
                    title={value.title}


                />
            )}
        </div>
    )
};

export default Posts;

