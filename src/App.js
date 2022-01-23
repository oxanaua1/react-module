import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import {
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostPage,
    UsersPage,
    AlbumsPage,
    PhotosPage
} from './pages';

function App() {

    return (
        <div>

            <Routes>

                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>

                </Route>

            </Routes>

        </div>
    );
}

export default App;

