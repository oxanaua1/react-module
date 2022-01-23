import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {userService} from '../../services/user.service';
import UserPosts from '../../components/UserPosts/UserPosts';


const UserPostPage = () => {

    const {id} = useParams();

    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        userService.getPostsByUserId(id).then(value => setUserPosts([...value]))

    }, [id])


    return (
        <div>
            {userPosts.map(userPost => <UserPosts key={userPost.id} userPost={userPost}/>)}

        </div>

    );
};

export {UserPostPage};