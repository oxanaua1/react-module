import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {PostCommentsPage, PostDetailsPage, PostsPage, UserDetailsPage, UserPostPage, UsersPage} from "./pages";

function App() {

    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={':posts'} element={<UserPostPage/>}/>
                        </Route>
                    </Route>


                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={':comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>

            </Routes>

        </div>
    );
}

export default App;

