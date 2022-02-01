import React from 'react';
import {useForm} from "react-hook-form";

import css from './Form.module.css'


const Form = ({dispatch}) => {

    const {handleSubmit, register, reset, getValues} = useForm();

    const submit = () => {
        reset()
    }


    return (
        <div>


            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div><label> Add Cat <input type="text" defaultValue={''} {...register('cat')}/></label>
                    <button onClick={() => {
                        dispatch({type: 'ADD_CAT', payload: getValues()})
                    }}>save
                    </button>
                </div>

                <div><label> Add Dog <input type="text" defaultValue={''} {...register('dog')}/></label>
                    <button onClick={() =>
                        dispatch({type: 'ADD_DOG', payload: getValues()}
                        )}>save
                    </button>
                </div>

            </form>

        </div>
    );
};

export {Form};

