import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./user.slice";
import postReducer from "./post.slice";
import commentReducer from "./comments.slice";


const store = configureStore({

    reducer: {
        users: userReducer,
        posts: postReducer,
        comments: commentReducer,

    }


});

export default store;