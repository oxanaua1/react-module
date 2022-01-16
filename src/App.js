import './App.css';
//
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import {useState} from "react";
import {postsService} from "./services/posts.service";


function App() {

    const [posts, setPosts] = useState([]);
    

    const getUserPosts = (id) => {

        postsService.getAllByUserId(id).then(value => {
            setPosts(value)
        });
    }


    return (
        <div>
            <div>
                <Users getUserPosts={getUserPosts}/>
            </div>
            <div>
                <Posts posts={posts}/>
            </div>


        </div>
    );
}

export default App;

