import { combineReducers, configureStore} from "@reduxjs/toolkit";
import bookSlice from "./bookSlice.js";


const reducers = combineReducers({
    books: bookSlice
})


export const store = configureStore({
    reducer: reducers
});

console.log(store)
console.log(store.getState())