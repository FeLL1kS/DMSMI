import ClientForm from './ClientForm'
import { connect } from 'react-redux'
import * as actions from '../../api/Clients/Client'
import { UPDATE_FORM, UPDATE_CURRENT_ID } from '../../redux/clientsReducer'

let mapStateToProps = (state) => {
    return {
        formData: state.clientsPage.formData,
        currentId: state.clientsPage.currentId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateForm: newFormData => {
            dispatch({type: UPDATE_FORM, newFormData})
        },
        updateCurrentId: newCurrentId => {
            dispatch({type: UPDATE_CURRENT_ID, newCurrentId})  
        },
        createClient: (data) => actions.create(dispatch, data),
        updateClient: (id, data) => actions.update(dispatch, id, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientForm)