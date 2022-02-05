import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {updateCarById, createCar} from "../../store/car.slice";


const Form = () => {

    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const {handleSubmit, register, setValue, reset, getValues} = useForm();

    const submit = (data) => {
        reset()
        console.log(data)

    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)

        }

    }, [carForUpdate])


    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <label><input type="text" placeholder={'model'} {...register('model')} /></label>
                <label><input type="text" placeholder={'price'} {...register('price')} /></label>
                <label><input type="text" placeholder={'year'} {...register('year')} /></label>
                <button onClick={() =>
                    dispatch(updateCarById({id: carForUpdate.id, car: getValues()}))}>
                    Update
                </button>
                <button onClick={() =>
                    dispatch(createCar({data: getValues()}))}>
                    Create
                </button>


            </form>

        </div>
    );
};

export {Form};

// onClick={()=> dispatch(createCar({}))}