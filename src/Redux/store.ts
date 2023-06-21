import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import comicsReducer from "./comicsReducerSlice";
import eventsReducer from "./eventsReducerSlice";
import heroesReducer from "./heroesReducerSlice";
import heroeSelectReducer from "./heroeSelectReducerSlice";

const store = configureStore({
  reducer: {
    comicsReducer: comicsReducer,
    eventsReducer: eventsReducer,
    heroesReducer: heroesReducer,
    heroeSelectReducer: heroeSelectReducer
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
