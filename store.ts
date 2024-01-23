import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./reducers/connectionReducer";

const store = configureStore({
    reducer: {
        connection: connectionReducer,
    }
})

export default store