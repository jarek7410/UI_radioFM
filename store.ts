import { configureStore } from "@reduxjs/toolkit";
import connectionReducer from "./reducers/connectionReducer";
import radioReducer from "./reducers/radioReducers";
import soundReducer from "./reducers/soundReducer";

const store = configureStore({
    reducer: {
        connection: connectionReducer,
        radio: radioReducer,
        sound: soundReducer,
    }
})

export default store