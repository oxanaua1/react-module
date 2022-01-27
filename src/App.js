import './App.css';
import {CharacterDetailsPage, CharacterPage, EpisodePage, LocationPage} from "./pages";
import {Route, Routes, Navigate, Router} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";


function App() {

    return (
        <div>

            <Routes>


                <Route path={'/'} element={<Layout/>}>
                    {/*<Route index element={<Navigate to={'users'}/>}/>*/}
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'character'} element={<CharacterPage/>}>
                        <Route path={':id'} element={<CharacterDetailsPage/>}/>
                        {/*<Route path={':id/location'} element={<CharacterDetailsPage/>}/>*/}
                    </Route>
                    <Route path={'episode'} element={<EpisodePage/>}/>
                    <Route path={'location'} element={<LocationPage/>}/>
                </Route>


            </Routes>


        </div>
    );
}

export default App;