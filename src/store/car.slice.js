import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {carService} from '../services';

const initialState = {
    cars: [],
    status: null,
    error: null,
    carForUpdate: null
}

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            console.log(e)
            console.log(e.response.data.detail)
            return rejectWithValue(e.response.data.detail)
        }
    }
)

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data: car}, {dispatch}) => {
        try {
            const data = await carService.create(car);
            dispatch(addCar({data}))
        } catch (e) {
            console.log(e)
        }

    }
);

export const updateCarById = createAsyncThunk(
    'carSlice/updateCarById',
    async ({id, car}, {dispatch}) => {
        const newCar = await carService.updateById(id, car);
        dispatch(updateCar({car: newCar}))
        return {car: newCar}

    }
);

export const deleteCarById = createAsyncThunk(
    'carSlice/deleteCarById',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCar({id}))
        }catch (e) {

        }

    }
);

const carSlice = createSlice({
    name: 'carSlice',
    initialState,

    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },

        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[index] = action.payload.car;
            state.carForUpdate = null

        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});

const carReducer = carSlice.reducer;
export const {carToUpdate, updateCar, addCar, deleteCar} = carSlice.actions;


export default carReducer;
