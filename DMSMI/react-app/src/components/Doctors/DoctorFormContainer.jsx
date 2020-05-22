import DoctorForm from './DoctorForm'
import { connect } from 'react-redux'
import * as actions from '../../api/Doctors/Doctor'
import { UPDATE_FORM, UPDATE_CURRENT_ID } from '../../redux/doctorsReducer'

let mapStateToProps = (state) => {
    return {
        formData: state.doctorsPage.formData,
        currentId: state.doctorsPage.currentId
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
        createDoctor: (data) => actions.create(dispatch, data),
        updateDoctor: (id, data) => actions.update(dispatch, id, data)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorForm)