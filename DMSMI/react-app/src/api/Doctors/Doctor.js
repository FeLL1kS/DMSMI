import api from '../api'

export const ACTION_TYPES_DOCTOR = {
    FETCH_ALL_DOCTORS: 'FETCH_ALL_DOCTORS',
    CREATE_DOCTOR: 'CREATE_DOCTOR',
    UPDATE_DOCTOR: 'UPDATE_DOCTOR',
    DELETE_DOCTOR: 'DELETE_DOCTOR'
}

const formateData = data => ({
    ...data,
    age:parseInt(data.age ? data.age : 0),
    expirience:parseInt(data.expirience ? data.expirience : 0)
})

export const fetchAll = (dispatch) => {
    api.Doctor().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES_DOCTOR.FETCH_ALL_DOCTORS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (dispatch, data) => {
    let formatedData = formateData(data)
    api.Doctor().create(formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_DOCTOR.CREATE_DOCTOR,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const update = (dispatch, id, data) => {
    let formatedData = formateData(data)
    debugger
    api.Doctor().update(id, formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_DOCTOR.UPDATE_DOCTOR,
                payload: {id, ...data}
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (dispatch, id) => {
    api.Doctor().delete(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES_DOCTOR.DELETE_DOCTOR,
                payload: id
            })
        })
        .catch(err => console.log(err))
}
