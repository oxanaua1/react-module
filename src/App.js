import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Commits from "./components/Commits/Commits";
import "./App.css"

function App() {
    return (

        <div>
            <div className={'Wrap'}>
                <div className={'Foo'}><Users/></div>
                <div className={'bar'}><Posts/></div>
            </div>
            <div className={'Footer'}><Commits/></div>
        </div>



    );
}


export default App;
