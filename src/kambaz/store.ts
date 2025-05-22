import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./courses/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentReducer from "./courses/assignments/reducer"

    const store = configureStore({
        reducer: {
            modulesReducer,
            accountReducer,
            assignmentReducer
        },
    });
export default store;