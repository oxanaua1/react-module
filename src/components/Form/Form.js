import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../services/car.service";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/car.validator";

//(3 )приймаю фю з АПП
const Form = ({update}) => {
    const [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}
    } = useForm({resolver: joiResolver(CarValidator), mode: "onTouched"});
    //-обєкти, які надає нам useForm

//ловимо помилки 1 спосіб(через проміси):
    // const submit = (car) => {   ////тут ф-я submit отримує обєкт car
    //     carService.create(car).then(value => console.log(value)).catch(error=>{
    //         setFormError(error.response.data)
    //     })
    // }
//ловимо помилки 2 спосіб (через async-await):
    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            update(newCar)  //(4) при сіюміті ВИКЛИКАЮ фю update і передаю в неї мій новий кар newCar (1)
        } catch (error) {
            setFormError(error.response.data)
        }
    }

    // watch(event => console.log(event)); ////-слідкує за діями над формою в реальному часі

    //При натисканні на кнопку стається івент onSubmit, що викликає ф-ю handleSubmit, яка знає про
    //стан обєкта 'model','price','year', який ми зареєстрували. щоб сказати ф-ї handleSubmit, що робити з обєктом
    // тому ми в якості колбека передаємо submit - дію, що ми робимо з обєктом

    return (
        <div>

            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model: <input type="text" defaultValue={''} {...register('model')}/></label></div>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {errors.model && <span>error.model.message</span>}

                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {errors.price && <span>error.price.message</span>}

                <div><label>Year:<input type="text" defaultValue={''}{...register('year')}/></label></div>
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                {errors.year && <span>error.year.message</span>}

                <button>save</button>
            </form>
            <hr/>

        </div>
    );
};

//{errors.model && <span>error.model.message</span>} - звертаємося до ерору по полю модел
// (бо ерор вже є formState: {errors})


export default Form;

