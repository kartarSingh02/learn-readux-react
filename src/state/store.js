import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
// thunks is used for asynchronous functions
import reducers from "./reducers";


export const store = createStore(reducers,{},applyMiddleware(thunk))