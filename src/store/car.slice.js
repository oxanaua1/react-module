import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    //це не обєкт, аргументи: перший параметр вказує на який слайс посилаюсь
    // після/ яка буде дія,асинхронна ф-я яка буде працювати з иим слайсом

    async (_, {rejectWithValue}) => {
        try {
            const cars = await carService.getAll();
            return cars
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const createCar = createAsyncThunk( //data параметр, що буду передавати, мій новий car/dispatch замість extraReducers(ін метод)
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar})) //заносимо дані в стейт
        } catch (e) {
            console.log(e)
        }
    }
);

export const deleteCarThunk  = createAsyncThunk(

    'carSlice/deleteCar',
    async ({id}, {dispatch})=>{
        try {
            await (carService.deleteById(id))
            dispatch(deleteCar({id})) //заносимо дані в стейт, що дані видалені за допомогою ф-ї deleteCar


        }catch (e) {
            console.log(e)

        }
    }
);


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
        state.cars.push({
            id: new Date().getTime(),
            ...action.payload.data })
        },

        // addCar: (state, action) => {
        //     state.cars.push(action.payload.data)
        //
        // },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    //покрокова відловлюю життєвий цикл своїх карів. передаю обєкт з динамічним ключем []
    extraReducers: {
        [getAllCars.pending]:
            (state, action) => {
                state.status = 'pending'
                state.error = null
            },
        [getAllCars.fulfilled]:
            (state, action) => {
                state.status = 'fulfilled'
                state.cars = action.payload
            },
        [getAllCars.rejected]:
            (state, action) => {
                state.status = 'rejected'
                state.error = action.payload
            }
    }

})


const carReducer = carSlice.reducer;
export const {addCar, deleteCar} = carSlice.actions;

export default carReducer;
