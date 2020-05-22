import api from '../api'

export const ACTION_TYPES_APPOINTMENT = {
    FETCH_ALL_APPOINTMENTS: 'FETCH_ALL_APPOINTMENTS',
    CREATE_APPOINTMENT: 'CREATE_APPOINTMENT',
    UPDATE_APPOINTMENT: 'UPDATE_APPOINTMENT',
    DELETE_APPOINTMENT: 'DELETE_APPOINTMENT'
}

const formateData = data => ({
    ...data,
    clientId: parseInt(data.clientId ? data.clientId : 0),
    doctorId: parseInt(data.doctorId ? data.doctorId : 0)
})


let clients = [];
let doctors = [];
api.Client().fetchAll().then(response => clients = response.data)
api.Doctor().fetchAll().then(response => doctors = response.data)


export const fetchAll = (dispatch) => {
    api.Appointment().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES_APPOINTMENT.FETCH_ALL_APPOINTMENTS,
                appointments: response.data,
                clients: clients,
                doctors: doctors
            })
        })
        .catch(err => console.log(err))
}

export const create = (dispatch, data) => {
    let formatedData = formateData(data)
    api.Appointment().create(formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_APPOINTMENT.CREATE_APPOINTMENT,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const update = (dispatch, id, data) => {
    let formatedData = formateData(data)
    debugger
    api.Appointment().update(id, formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_APPOINTMENT.UPDATE_APPOINTMENT,
                payload: {id, ...data}
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (dispatch, id) => {
    api.Appointment().delete(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_APPOINTMENT.DELETE_APPOINTMENT,
                payload: id
            })
        })
        .catch(err => console.log(err))
}
