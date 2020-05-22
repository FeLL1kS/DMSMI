import { createStore, combineReducers } from "redux";
import clientsReducer from './clientsReducer'
import doctorsReducer from './doctorsReducer'
import appointmentsReducer from './appointmentsReducer'

let reducers = combineReducers({clientsPage: clientsReducer, doctorsPage: doctorsReducer, appointmentsPage: appointmentsReducer})

let store = createStore(reducers)

export default store