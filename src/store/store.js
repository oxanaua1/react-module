import {configureStore} from "@reduxjs/toolkit";

import todoReducer from "./todo.slice";

let store = configureStore({
    reducer: {
        todo: todoReducer,
    }
});

export default store
