import api from './api'

export const ACTION_TYPES = {
    FETCH_ALL_CLIENTS: 'FETCH_ALL_CLIENTS',
    CREATE_CLIENT: 'CREATE_CLIENT',
    UPDATE_CLIENT: 'UPDATE_CLIENT',
    DELETE_CLIENT: 'DELETE_CLIENT'
}

const formateData = data => ({
    ...data,
    age:parseInt(data.age ? data.age : 0)
})

export const fetchAll = (dispatch) => {
    api.Client().fetchAll()
        .then(response => {
            dispatch({
                type: ACTION_TYPES.FETCH_ALL_CLIENTS,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const create = (dispatch, data) => {
    let formatedData = formateData(data)
    api.Client().create(formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE_CLIENT,
                payload: response.data
            })
        })
        .catch(err => console.log(err))
}

export const update = (dispatch, id, data) => {
    let formatedData = formateData(data)
    debugger
    api.Client().update(id, formatedData)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.UPDATE_CLIENT,
                payload: {id, ...data}
            })
        })
        .catch(err => console.log(err))
}

export const Delete = (dispatch, id) => {
    api.Client().delete(id)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.DELETE_CLIENT,
                payload: id
            })
        })
        .catch(err => console.log(err))
}
