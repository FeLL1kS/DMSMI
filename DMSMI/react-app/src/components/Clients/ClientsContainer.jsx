import Clients from './Clients'
import { connect } from 'react-redux'
import * as actions from '../../api/Clients/Client'
import { UPDATE_CURRENT_ID, UPDATE_FORM } from '../../redux/clientsReducer'

let mapStateToProps = (state) => {
    return {
        clients: state.clientsPage.clients,
        formData: state.clientsPage.formData
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
        fetchAllClients: () => actions.fetchAll(dispatch),
        deleteClient: id => actions.Delete(dispatch, id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients)