import React from "react";
import {useDispatch} from "react-redux";

import {changeStatus, deleteTodo} from "../../store";
import css from "./Todo.module.css"

const Todo = ({todo}) => {

    const {id, name, status} = todo;
    const dispatch = useDispatch();


    return (
        <div>

            <div className={css.todo}>
                <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
                <div className={status ? css.changed : ''}>{name}</div>
                <button onClick={() => dispatch(deleteTodo({id}))}>delete</button>
            </div>


        </div>
    );
};

export {Todo};