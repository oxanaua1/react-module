import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {postService} from "../services";

const initialState = {
    posts: [],
    status: null,
    error: null
};

export const getAllPosts = createAsyncThunk(
    'postSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postService.getAll()

        } catch (e) {
            return rejectWithValue(e.response.data.detail)
        }
    }
);

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = ''
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
});


const postReducer = postSlice.reducer;

export default postReducer;
