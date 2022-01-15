import './App.css';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import {useState} from "react";
import {postService} from "./services/post.service";

function App() {

    const [user, setUser] = useState(null);

    const [posts, setPosts] = useState([]);


    const getUser = (user) => {
        setUser(user)
        setPosts([])
    }
    const getUserId = (id) => {
        postService.getByUserId(id).then(value => setPosts([...value]))

    }

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {!!posts.length && <Posts posts={posts}/>}
        </div>


    );
}

export default App;