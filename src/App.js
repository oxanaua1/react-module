import './App.css';
import Form from "./components/Form/Form";
import React, {useReducer} from "react";
import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";


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


function App() {


    const [state, dispatch] = useReducer(reducer, {cat: '', dog: ''});

    const getFormData = (dataCat, dataDog) => {

        // dispatch({type: 'cat' } id: new Date().getTime(), ...dataCat)
        // dispatch({type: 'dog'} = {id: new Date().getTime(), ...dataDog})
    }


    const getFromId = (id) => {


    }


    return (
        <div>
            <Form getFormData={getFormData} reducer={reducer}/>
            <Cat getFromId={getFromId}/>
            <Dog getFromId={getFromId}/>

            {/*<div>{state.cat}</div>*/}
            {/*<div>{state.dog}</div>*/}

        </div>
    );
}

export default App;