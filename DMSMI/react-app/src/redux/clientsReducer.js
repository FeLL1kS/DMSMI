import { ACTION_TYPES_CLIENT } from "../api/Clients/Client"

export const UPDATE_FORM = "UPDATE_FORM"
export const UPDATE_CURRENT_ID = "UPDATE_CURRENT_ID"

const initialState = {
    clients: [],
    formData: {
        fullName: '',
        age: '',
        sex: '',
        snils: '',
        police: '',
        address: ''
    },
    currentId: 0
}

const clientsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ACTION_TYPES_CLIENT.FETCH_ALL_CLIENTS:
            return {
                ...state,
                clients: [...action.payload]
            }
        case ACTION_TYPES_CLIENT.CREATE_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        case ACTION_TYPES_CLIENT.UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map(c => c.id === action.payload.id ? action.payload : c)
            }
        case ACTION_TYPES_CLIENT.DELETE_CLIENT:
            return {
                ...state,
                clients: state.clients.filter(c => c.id !== action.payload)
            }
        case UPDATE_FORM:
            return {
                ...state,
                formData: action.newFormData
            }
        case UPDATE_CURRENT_ID:
            return {
                ...state,
                currentId: action.newCurrentId
            }
        default:
            return state;
    }
}

export default clientsReducer