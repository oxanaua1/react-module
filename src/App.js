import './App.css';
import Form from "./components/Form/Form";
import React, {useReducer} from "react";
import cat from "./components/Cat/Cat";

function App() {

    const reducer = (state, action) => {

        switch (action.type) {
            case 'cat':
                return {...state, cat: state.cat};
            case'dog':
                return {...state, dog: state.dog};
            default :
                return state
        }


    }

    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    const getFormData = (data) => {
        dispatch({type: 'cat'})

        dispatch({type: 'dog'})
    }


    return (
        <div>
            <Form getFormData={getFormData} reducer={reducer}/>

            <div>{state.cat}</div>
            <div>{state.dog}</div>

        </div>
    );
}

export default App;