import { combineReducers } from "redux";
import amountReducer from "./amountReducer";


// this is used to wrap all the reducer into one reducers which we can export , this can have n no. of reducers
const reducers = combineReducers({
    amount: amountReducer
})

export default reducers;