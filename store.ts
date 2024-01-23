import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./src/reducers/connectionReducer";
import radioReducer from "./src/reducers/radioReducers";

const store = configureStore({
    reducer: {
        connection: connectionReducer,
        radio: radioReducer,
    }
})

export default store