import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {userService} from "../services";

const initialState = {
    users: [],
    status: null,
    error: null
};

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll()

        } catch (e) {
            return rejectWithValue(e.response.data.detail)
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending'

        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = ''
            state.users = action.payload

        },
        [getAllUsers.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});


const userReducer = userSlice.reducer;

export default userReducer;
