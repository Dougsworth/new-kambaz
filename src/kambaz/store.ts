import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./courses/modules/reducer";
import accountReducer from "./account/reducer";
import assignmentReducer from "./courses/assignments/reducer";
// Import lab reducers
import helloReducer from "../labs/lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../labs/lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../labs/lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../labs/lab4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    // Kambaz reducers
    modulesReducer,
    accountReducer,
    assignmentReducer,

    // Lab reducers
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
