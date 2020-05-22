import { ACTION_TYPES_APPOINTMENT } from "../api/Appointments/Appointments"

export const UPDATE_FORM = "UPDATE_FORM"
export const UPDATE_CURRENT_ID = "UPDATE_CURRENT_ID"

const initialState = {
    appointments: [],
    clients: [],
    doctors: [],
    formData: {
        clientId: '',
        doctorId: '',
        appointmentDate: '',
        note: ''
    },
    currentId: 0
}

const appointmentsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ACTION_TYPES_APPOINTMENT.FETCH_ALL_APPOINTMENTS:
            return {
                ...state,
                appointments: [...action.appointments],
                clients: [...action.clients],
                doctors: [...action.doctors]
            }
        case ACTION_TYPES_APPOINTMENT.CREATE_APPOINTMENT:
            return {
                ...state,
                appointments: [...state.clients, action.payload]
            }
        case ACTION_TYPES_APPOINTMENT.UPDATE_APPOINTMENT:
            return {
                ...state,
                appointments: state.clients.map(c => c.id === action.payload.id ? action.payload : c)
            }
        case ACTION_TYPES_APPOINTMENT.DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.clients.filter(c => c.id !== action.payload)
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

export default appointmentsReducer