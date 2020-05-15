import { createStore, combineReducers } from "redux";
import clientsReducer from './clientsReducer'

let reducers = combineReducers({clientsPage: clientsReducer})

let store = createStore(reducers)

export default store