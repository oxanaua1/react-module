import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + 1}
        case 'dec':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: 0}

        case 'inc1':
            return {...state, count1: state.count1 + 1}
        case 'dec1':
            return {...state, count1: state.count1 - 1}
        case 'reset1':
            return {...state, count1: 0}

        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'reset2':
            return {...state, count2: 0}

        default:
            throw new Error('errror!')
    }

}


function App() {
    const [state, dispatch] = useReducer(reducer, {count: 0, count1: 0, count2: 0});

    return (
        <div style={{display: 'flex', gap: '50px', justifyContent:'center'}}>
            <div>
                <p style={{color:'red', fontSize:'x-large'}}>Press me:</p>
                <h2 style={{display: 'flex', justifyContent:'center'}}> {state.count}</h2>
                <button onClick={() => dispatch({type: 'inc'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset'})}>RESET</button>
            </div>

            <div>
                <p style={{color:'darkyellow', fontSize:'x-large'}}>Press me:</p>
                <h2 style={{display: 'flex', justifyContent:'center'}}>{state.count1}</h2>
                <button onClick={() => dispatch({type: 'inc1'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec1'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset1'})}>RESET</button>
            </div>

            <div>
                <p style={{color:'green', fontSize:'x-large'}}>Press me:</p>
                <h2 style={{display: 'flex', justifyContent:'center'}}>{state.count2}</h2>
                <button onClick={() => dispatch({type: 'inc2'})}>INC</button>
                <button onClick={() => dispatch({type: 'dec2'})}>DEC</button>
                <button onClick={() => dispatch({type: 'reset2'})}>RESET</button>
            </div>


        </div>
    );
}

export default App;