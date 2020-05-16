import { createStore, combineReducers } from "redux";
import clientsReducer from './clientsReducer'
import doctorsReducer from './doctorsReducer'

let reducers = combineReducers({clientsPage: clientsReducer, doctorsPage: doctorsReducer})

let store = createStore(reducers)

export default store