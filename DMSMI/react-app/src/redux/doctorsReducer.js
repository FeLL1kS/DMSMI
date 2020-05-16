import { ACTION_TYPES_DOCTOR } from '../api/Doctors/Doctor'

export const UPDATE_FORM = "UPDATE_FORM"
export const UPDATE_CURRENT_ID = "UPDATE_CURRENT_ID"

const initialState = {
    doctors: [],
    formData: {
        fullName: '',
        pasport: '',
        education: '',
        age: '',
        specialization: '',
        expirience: ''
    },    
    currentId: 0
}

const doctorsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ACTION_TYPES_DOCTOR.FETCH_ALL_DOCTORS:
            return {
                ...state,
                doctors: [...action.payload]
            }
        case ACTION_TYPES_DOCTOR.CREATE_DOCTOR:
            return {
                ...state,
                doctors: [...state.doctors, action.payload]
            }
        case ACTION_TYPES_DOCTOR.UPDATE_DOCTOR:
            return {
                ...state,
                doctors: state.doctors.map(c => c.id === action.payload.id ? action.payload : c)
            }
        case ACTION_TYPES_DOCTOR.DELETE_DOCTOR:
            return {
                ...state,
                doctors: state.doctors.filter(c => c.id !== action.payload)
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

export default doctorsReducer