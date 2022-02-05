import "./App.css";

import css from "./App.module.css"
import {Form, Todos} from "./components";


function App() {
    return (
        <div className={css.wrapper}>
            <Form/>
            <Todos/>

        </div>
    );
}

export default App;