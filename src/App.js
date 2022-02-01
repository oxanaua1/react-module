import './App.css';
import React, {useReducer} from "react";

import {Cats, Dogs, Form} from "./components";
import css from './App.module.css'


const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_CAT':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), cat: action.payload.cat}]};
        case'ADD_DOG':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), dog: action.payload.dog}]};
        case 'DELETE_CAT':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
        case 'DELETE_DOG':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};

        default :
            return state
    }

};

function App() {

    const [{cats, dogs}, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    return (
        <div className={css.wrapper}>
            <Form dispatch={dispatch}/>
            <div className={css.main}>
                <Cats cats={cats} dispatch={dispatch}/>
                <Dogs dogs={dogs} dispatch={dispatch}/>
            </div>

        </div>
    );
}

export default App;