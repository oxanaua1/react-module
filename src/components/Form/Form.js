import React from 'react';
import {useForm} from "react-hook-form";


const Form = ({getFormData, reducer}) => {


    const {handleSubmit, register, formState: {errors}, reset} = useForm();
    console.log(errors)

    const submitCat = (dataCat) => {
        getFormData(dataCat)
        reset(dataCat)
        console.log(dataCat)
    }
    const submitDog = (dataDog) => {
        getFormData(dataDog)
        reset(dataDog)
        console.log(dataDog)
    }

    return (
        <div>


            <form onSubmit={(handleSubmit((submitCat)))}>
                <label>Add Cat <input type="text" defaultValue={''} {...register('cat')}/></label>
                <button>save</button>
            </form>

            <hr/>

            <form onSubmit={(handleSubmit((submitDog)))}>
                <label>Add Dog <input type="text" defaultValue={''} {...register('dog')}/></label>
                <button>save</button>
            </form>

            <hr/>
            


        </div>
    );
};

export default Form;
