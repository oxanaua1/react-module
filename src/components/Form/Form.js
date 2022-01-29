import React from 'react';
import {useForm} from "react-hook-form";


const Form = ({getFormData, reducer}) => {


    const {handleSubmit, register, formState: {errors}, reset} = useForm();
    console.log(errors)

    const submit = (data) => {
        getFormData(data)
        reset()
    }

    return (
        <div>


            <form onSubmit={(handleSubmit((submit)))}>
                <label>Add Cat <input type="text" defaultValue={''} {...register('cat')}/></label>
                <button>save</button>
            </form>

            <hr/>

            <form onSubmit={(handleSubmit((submit)))}>
                <label>Add Dog <input type="text" defaultValue={''} {...register('dog')}/></label>
                <button>save</button>
            </form>

            <hr/>


        </div>
    );
};

export default Form;
