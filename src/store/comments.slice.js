import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {commentService} from "../services";

const initialState = {
    comments: [],
    status: null,
    error: null
};

export const getAllComments = createAsyncThunk(
    'commentsSlice/getAllComments',
    async (_, {rejectWithValue}) => {
        try {
            return await commentService.getAll()

        } catch (e) {

            return rejectWithValue(e.response.data.detail)
        }
    }
);

const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllComments.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = ''
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});


const commentReducer = commentSlice.reducer;

export default commentReducer;
