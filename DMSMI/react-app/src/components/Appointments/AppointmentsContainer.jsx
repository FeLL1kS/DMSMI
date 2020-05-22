import Appointments from './Appointments'
import { connect } from 'react-redux'
import * as actions from '../../api/Appointments/Appointments'
import { UPDATE_CURRENT_ID, UPDATE_FORM } from '../../redux/appointmentsReducer'

let mapStateToProps = (state) => {
    return {
        clients: state.appointmentsPage.clients,
        doctors: state.appointmentsPage.doctors,
        appointments: state.appointmentsPage.appointments,
        formData: state.appointmentsPage.formData
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
        fetchAllAppointments: () => {
            actions.fetchAll(dispatch)
        },
        deleteAppointment: id => actions.Delete(dispatch, id)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointments)