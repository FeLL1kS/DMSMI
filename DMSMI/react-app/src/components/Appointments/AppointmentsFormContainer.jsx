import AppointmentsForm from './AppointmentsForm'
import { connect } from 'react-redux'
import * as actions from '../../api/Appointments/Appointments'
import { UPDATE_FORM, UPDATE_CURRENT_ID } from '../../redux/appointmentsReducer'

let mapStateToProps = (state) => {
    return {
        appointments: state.appointmentsPage.appointments,
        clients: state.appointmentsPage.clients,
        doctors: state.appointmentsPage.doctors,
        formData: state.appointmentsPage.formData,
        currentId: state.appointmentsPage.currentId
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
        createAppointment: (data) => actions.create(dispatch, data),
        updateAppointment: (id, data) => actions.update(dispatch, id, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsForm)