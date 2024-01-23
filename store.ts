import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./reducers/connectionReducer";
import radioReducer from "./reducers/radioReducers";

const store = configureStore({
    reducer: {
        connection: connectionReducer,
        radio: radioReducer,
    }
})

export default store